from rest_framework import viewsets
from .models import ChatMessage
from .serializers import ChatMessageSerializer, UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
