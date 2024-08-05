# multiply/urls.py
from django.urls import path
from .views import multiply_by_two

urlpatterns = [
    path('multiply/', multiply_by_two, name='multiply_by_two'),
]
