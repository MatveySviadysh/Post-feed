from django.urls import path
from .views import process_request

urlpatterns = [
    path('process/', process_request),
]
