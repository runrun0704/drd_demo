from django.contrib import admin
from django.urls import path,include
from .views import demofunc


urlpatterns = [
    path('demo/',demofunc,name='demo'),
]