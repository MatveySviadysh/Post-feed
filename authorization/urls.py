from django.contrib.auth import views as auth_views
from . import views

from django.contrib import admin
from django.urls import path, include

from .views import RegisterView, profile_view, ProfileView, LoginView

urlpatterns = [
    #path('register/', register, name='register'),
    # path('login/', auth_views.LoginView.as_view(template_name='authorization/login.html'), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(template_name='authorization/logout.html'), name='logout'),
    # path('profile/', profile_view, name='profile'), 
    # path('api/profile/', ProfileView.as_view(), name='profile-api'),
    # path('admin/', admin.site.urls),
    # path('auth/', include('app_authorization.urls')),

    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('login/', LoginView.as_view(), name='login'),
]
