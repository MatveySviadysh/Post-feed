from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from .views import home
from . import views  
from authorization import urls
from .views import create_post, list_posts
from .views import UserListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authorization.urls')),
    path('set-cookie/', views.set_cookie_view, name='set_cookie'),
    path('get-cookie/', views.get_cookie_view, name='get_cookie'),
    path('posts/', include('appPost.urls')),  
    path('api/', include('process.urls')), 
    path('posts/create/', create_post, name='create_post'),
    path('posts/', list_posts, name='list_posts'),
]
