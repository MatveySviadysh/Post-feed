from django.urls import path
from .views import PostCreate

urlpatterns = [
    path('create/', PostCreate.as_view(), name='post_create'),
]
