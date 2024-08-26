import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from appPost.models import Post, Like
from django.contrib.auth.models import User


@pytest.fixture(autouse=True)
def no_db_access_for_migrations(monkeypatch):
    monkeypatch.setattr('django.db.migrations.executor.MigrationExecutor.migrate', lambda self, targets, plan=None, fake=False, fake_initial=False: None)
    
@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def create_user():
    return User.objects.create_user(username='testuser', password='testpassword')

@pytest.fixture
def create_post(create_user):
    return Post.objects.create(author=create_user, content='Test post content')

@pytest.mark.django_db
def test_create_post(api_client, create_user):
    api_client.force_authenticate(user=create_user)
    url = reverse('post_create')
    data = {
        'content': 'New post content',
        'title': 'Post title' 
    }
    response = api_client.post(url, data, format='multipart')
    
    assert response.status_code == status.HTTP_201_CREATED
    assert Post.objects.count() == 1

@pytest.mark.django_db
def test_list_posts(api_client, create_post):
    url = reverse('post_list')
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1

@pytest.mark.django_db
def test_post_detail(api_client, create_post):
    url = reverse('post_detail', args=[create_post.id])
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert response.data['content'] == 'Test post content'

@pytest.mark.django_db
def test_like_post(api_client, create_user, create_post):
    api_client.force_authenticate(user=create_user)
    url = reverse('posts_list')  
    data = {'post_id': create_post.id}
    response = api_client.post(url, data)
    assert response.status_code == status.HTTP_200_OK
    assert Like.objects.filter(user=create_user, post=create_post).exists()
    create_post.refresh_from_db()
    assert create_post.likes == 1

@pytest.mark.django_db
def test_like_post_already_liked(api_client, create_user, create_post):
    Like.objects.create(user=create_user, post=create_post)
    api_client.force_authenticate(user=create_user)
    url = reverse('posts_list')
    data = {'post_id': create_post.id}
    response = api_client.post(url, data)
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert 'You have already liked this post' in response.data['error']
