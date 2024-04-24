from rest_framework import serializers

from api import models


class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Name
        fields = ["id", "name", "gender"]

    def create(self, validated_data):
        validated_data["user"] = self.context["request"].user
        return super().create(validated_data)
