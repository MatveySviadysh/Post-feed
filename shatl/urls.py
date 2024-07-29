from django.contrib import admin
from django.urls import path,include

from .views import home
from . import views  
from authorization import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'), 
    path('authorization/', include('authorization.urls')),
]
