from django.shortcuts import render

from django.contrib.auth.models import User
from django.views.generic import ListView

from .forms import UserSearchForm
from django.http import HttpResponse

from rest_framework import viewsets
from .serializers import UserSerializer

def home(request):
    return render(request, 'shatl/home.html')   

class UserListView(ListView):
    model = User
    template_name = 'shatl/user_list.html'  
    context_object_name = 'users'   

    def get_queryset(self):
        queryset = User.objects.none()  # По умолчанию ничего не отображаем
        form = UserSearchForm(self.request.GET)
        if form.is_valid() and form.cleaned_data['username']:
            queryset = User.objects.filter(username__icontains=form.cleaned_data['username'])
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = UserSearchForm(self.request.GET or None)
        return context
    



def set_cookie_view(request):
    response = HttpResponse("Setting a cookie")
    response.set_cookie('my_cookie', 'cookie_value', max_age=3600, samesite='Lax', secure=False)
    return response

def get_cookie_view(request):
    cookie_value = request.COOKIES.get('my_cookie')
    return HttpResponse(f"The value of the cookie is: {cookie_value}")



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer