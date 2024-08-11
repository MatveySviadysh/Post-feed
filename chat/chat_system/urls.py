from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChatMessageViewSet, UserViewSet

router = DefaultRouter()
router.register(r'messages', ChatMessageViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
