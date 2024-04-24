from django.contrib import admin

from api import models


@admin.register(models.Name)
class NameAdmin(admin.ModelAdmin):
    search_fields = ["id", "name", "user"]
    list_display = ["id", "name", "gender", "user"]
    list_filter = ["gender"]
