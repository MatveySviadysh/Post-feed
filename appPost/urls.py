from django.urls import path
from .views import PostCreate, PostList, PostDetail

urlpatterns = [
    path('create/', PostCreate.as_view(), name='post_create'),
    path('', PostList.as_view(), name='post_list'),
    path('<int:pk>/', PostDetail.as_view(), name='post_detail'),
]
