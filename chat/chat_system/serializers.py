from rest_framework import serializers
from .models import ChatMessage
from django.contrib.auth import get_user_model

User = get_user_model()

class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']  # Добавьте необходимые поля
