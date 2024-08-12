from django.urls import path
from .views import process_request

urlpatterns = [
    path('request', process_request, name='process_request'),  
]
