from rest_framework.parsers import MultiPartParser, FormParser
from .models import Post, Like
from .serializers import PostSerializer
from rest_framework.permissions import AllowAny,IsAuthenticatedOrReadOnly,IsAuthenticated
from rest_framework import viewsets, generics, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.cache import cache

class PostCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        serializer.save()


class PostList(generics.ListAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    def list(self, request, *args, **kwargs):
        cache_key = 'posts_list'
        cached_posts = cache.get(cache_key)

        if cached_posts is None:
            queryset = self.get_queryset()
            serializer = self.get_serializer(queryset, many=True)
            cached_posts = serializer.data
            cache.set(cache_key, cached_posts, timeout=60*15)  # 15 minutes

        return Response(cached_posts)

class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def like_post(self, request, *args, **kwargs):
        post_id = request.data.get('post_id')
        user = request.user  

        if not post_id:
            return Response({'error': 'post_id is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)

        if Like.objects.filter(user=user, post=post).exists():
            return Response({'error': 'You have already liked this post'}, status=status.HTTP_400_BAD_REQUEST)

        Like.objects.create(user=user, post=post)
        post.likes += 1
        post.save()

        return Response({'status': 'post liked', 'likes': post.likes}, status=status.HTTP_200_OK)
