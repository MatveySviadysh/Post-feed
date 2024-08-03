from django.urls import path
from .views import PostCreate,PostList

urlpatterns = [
    path('create/', PostCreate.as_view(), name='post_create'),
    path('posts/', PostList.as_view(), name='post_list'),
]
