from django.urls import path, include
from .views import RegisterView, ProfileView, LoginView, CurrentUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'), 
    path('login/', LoginView.as_view(), name='login'),
    path('current_user/', CurrentUserView.as_view(), name='current_user'),
]
