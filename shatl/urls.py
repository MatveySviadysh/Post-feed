from django.contrib import admin
from django.urls import path,include

from .views import home
from . import views  
from authorization import urls

from .views import UserListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authorization.urls')),
    path('set-cookie/', views.set_cookie_view, name='set_cookie'),
    path('get-cookie/', views.get_cookie_view, name='get_cookie'),
    path('api/', include('posts.urls')),
]