from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import json

@csrf_exempt
def process_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            number = data.get('number')
            if number is None:
                return HttpResponseBadRequest("Missing 'number' in request body")

            response = requests.post('http://localhost:8001/api/multiply/', json={'number': number})
            if response.status_code == 200:
                result = response.json().get('result')
                return JsonResponse({'result': result})
            else:
                return JsonResponse({'error': f'Failed to get result from notification service {number}'}, status=response.status_code)
        except json.JSONDecodeError:
            return HttpResponseBadRequest("Invalid JSON")
    else:
        return HttpResponseBadRequest("Invalid request method")
