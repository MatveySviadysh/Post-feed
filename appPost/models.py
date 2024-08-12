from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # author field is optional
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE, blank=True, null=True)
