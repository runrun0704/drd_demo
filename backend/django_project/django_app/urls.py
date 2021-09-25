from django.contrib import admin
from django.urls import path,include
from django_app_app import apis
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('django_app_app.urls')),
    path(r'api/',include(apis.router.urls)),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
