import requests

def get_users():
    response = requests.get('http://127.0.0.1:8000/api/users/')
    if response.status_code == 200:
        return response.json()
    return []
