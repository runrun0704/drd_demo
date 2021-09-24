from django.contrib import admin
from django.urls import path,include
from .views import demofunc,indexfunc


urlpatterns = [
    path('demo/',demofunc,name='demo'),
    path('index/',indexfunc.as_view(),name='index')
]