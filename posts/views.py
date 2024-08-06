from django.shortcuts import render
from django.http import JsonResponse
from .models import Post
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

def create_post(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        image = request.FILES.get('image')

        post = Post.objects.create(title=title, content=content, image=image)
        return JsonResponse({'id': post.id, 'title': post.title, 'content': post.content, 'image': post.image.url if post.image else None})

def list_posts(request):
    posts = Post.objects.all()
    posts_data = [{'id': post.id, 'title': post.title, 'content': post.content, 'image': post.image.url if post.image else None} for post in posts]
    return JsonResponse(posts_data, safe=False)