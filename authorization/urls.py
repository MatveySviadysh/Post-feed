from django.contrib.auth import views as auth_views
from . import views

from django.contrib import admin
from django.urls import path, include

from .views import RegisterView, ProfileView, LoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'), 
    path('login/', LoginView.as_view(), name='login'),
]
