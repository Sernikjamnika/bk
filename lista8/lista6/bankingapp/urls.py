from django.urls import path
from django.views.generic.base import TemplateView
from django.contrib.auth import views as auth_views
from .views import register, transfer_history, create_transfer, transfer_confirm

urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('register/', register, name='register',),
    path('transfer/', create_transfer,  name='create_transfer'),
    path('transfer_confirm/', transfer_confirm,  name='transfer_confirm'),
    path('history/', transfer_history, name ='history'),
]