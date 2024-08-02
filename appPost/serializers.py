from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'user', 'image', 'caption', 'created_at']
        read_only_fields = ['user', 'created_at']