from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from .views import home
from . import views  
from authorization import urls

from .views import UserListView

from rest_framework.routers import DefaultRouter
from .views import UserViewSet

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

   

router = DefaultRouter()
router.register(r'users', UserViewSet)

schema_view = get_schema_view(
   openapi.Info(
      title="API Documentation",
      default_version='v1',
      description="Описание вашего API",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="support@example.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
   path('admin/', admin.site.urls),
   
   # path('set-cookie/', views.set_cookie_view, name='set_cookie'),
   # path('get-cookie/', views.get_cookie_view, name='get_cookie'),

   path('api/auth/', include('authorization.urls')),
   path('api/posts/', include('appPost.urls')),  
   path('process/', include('process.urls')),
   path('api/', include(router.urls)),

   path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
   urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)