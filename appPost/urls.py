from django.urls import path
from .views import PostListCreateView, PostDetailView

urlpatterns = [
    path('create/', PostListCreateView.as_view(), name='post-list-create'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
]
