from django.contrib.auth import login
from django.contrib.auth import logout
from django.contrib.auth import update_session_auth_hash
from rest_framework import mixins
from rest_framework import status
from rest_framework import views
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from backend.api import models
from backend.api import serializers


class NameViewSet(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NameSerializer

    def get_queryset(self):
        return models.Name.objects.filter(user=self.request.user)


class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    authentication_classes = [SessionAuthentication]
    serializer_class = serializers.UserSerializer

    @action(methods=["GET"], detail=False)
    def me(self, request):
        return Response(serializers.UserSerializer(instance=request.user).data)

    @action(methods=["POST"], detail=False)
    def change_password(self, request):
        serializer = serializers.ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            if user.check_password(serializer.data.get("old_password")):
                user.set_password(serializer.data.get("new_password"))
                user.save()
                update_session_auth_hash(request, user)
                return Response(
                    {"message": "Password changed successfully."},
                    status=status.HTTP_200_OK,
                )
            return Response(
                {"error": "Incorrect old password."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = serializers.LoginSerializer(
            data=self.request.data, context={"request": self.request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return Response(
            serializers.UserSerializer(user).data, status=status.HTTP_200_OK
        )


class LogoutView(views.APIView):
    def post(self, request):
        logout(request)
        return Response(None, status=status.HTTP_204_NO_CONTENT)


class RegisterView(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = models.User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = serializers.RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        user = serializer.instance
        return Response(
            serializers.UserSerializer(user).data,
            status=status.HTTP_201_CREATED,
        )
