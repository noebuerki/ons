"""
URL configuration for ons project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include
from django.urls import path
from rest_framework_nested import routers

from backend import settings
from backend.api import viewsets


router = routers.DefaultRouter(trailing_slash=False)
router.register("names", viewset=viewsets.NameViewSet, basename="names")
router.register("users", viewset=viewsets.UserViewSet, basename="users")
router.register("register", viewset=viewsets.RegisterView, basename="register")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/login/", viewsets.LoginView.as_view()),
    path("api/logout/", viewsets.LogoutView.as_view()),
    path(
        "api/password_reset/",
        include("django_rest_passwordreset.urls", namespace="password_reset"),
    ),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
