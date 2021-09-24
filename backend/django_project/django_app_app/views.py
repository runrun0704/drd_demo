from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


# Create your views here.
def demofunc(request):
    return HttpResponse('HelloWorld')

class indexfunc(TemplateView):
    template_name = 'index.html'    
