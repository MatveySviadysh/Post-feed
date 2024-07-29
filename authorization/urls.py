from django.urls import path
from django.contrib.auth import views as auth_views
from .views import register, profile_view, ProfileView
from . import views

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='authorization/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='authorization/logout.html'), name='logout'),
    path('profile/', profile_view, name='profile'), 
    path('api/profile/', ProfileView.as_view(), name='profile-api'),
]
