from rest_framework import viewsets

from core import models
from core import serializers


class NameViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.NameSerializer

    def get_queryset(self):
        return models.Name.objects.filter(user=self.request.user)
