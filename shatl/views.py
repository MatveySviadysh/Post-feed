from django.shortcuts import render

from django.contrib.auth.models import User
from django.views.generic import ListView

from .forms import UserSearchForm

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