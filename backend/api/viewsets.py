from django.contrib.auth import login
from django.contrib.auth import logout
from django.contrib.auth.models import User
from rest_framework import mixins
from rest_framework import status
from rest_framework import views
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api import models
from api import serializers


class NameViewSet(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NameSerializer

    def get_queryset(self):
        return models.Name.objects.filter(user=self.request.user)


class UserViewSet(viewsets.ModelViewSet, mixins.ListModelMixin):
    queryset = User.objects.all()
    authentication_classes = [SessionAuthentication]
    serializer_class = serializers.UserSerializer

    @action(methods=["GET"], detail=False)
    def me(self, request):
        return Response(serializers.UserSerializer(instance=request.user).data)


class LoginView(views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = serializers.LoginSerializer(
            data=self.request.data, context={"request": self.request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return Response({"username": user.username}, status=status.HTTP_200_OK)


class LogoutView(views.APIView):
    def post(self, request):
        logout(request)
        return Response(None, status=status.HTTP_204_NO_CONTENT)


class RegisterView(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = serializers.RegisterSerializer
