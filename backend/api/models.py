from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    email = models.EmailField(blank=True, unique=True)


class Name(models.Model):
    name = models.CharField(max_length=45)
    gender = models.CharField(
        choices=[
            ("male", _("Male")),
            ("female", _("Female")),
            ("unisex", _("Unisex")),
        ]
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name=_("User"),
        related_name="names",
    )

    class Meta:
        unique_together = ("name", "user")
