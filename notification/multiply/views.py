from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import Notification
from .serializers import NotificationSerializer

@csrf_exempt
def multiply_by_two(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            number = data.get('number')
            if number is None:
                return JsonResponse({'error': 'Missing number in request'}, status=400)

            result = number * 2
            return JsonResponse({'result': result})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Notification.objects.all()