from django.urls import path
from .views import PostCreate, PostList, PostDetail, PostViewSet

urlpatterns = [
    path('create/', PostCreate.as_view(), name='post_create'),
    path('', PostList.as_view(), name='post_list'),
    path('<int:pk>/', PostDetail.as_view(), name='post_detail'),
    path('posts_line/', PostViewSet.as_view({'get': 'list'}), name='posts_list'),
]
