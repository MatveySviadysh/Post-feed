from django.contrib import admin
from django.urls import path,include

from .views import home
from . import views  
from authorization import urls

from .views import UserListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'), 
    path('authorization/', include('authorization.urls')),
    path('users/', UserListView.as_view(), name='user_list'),
]
