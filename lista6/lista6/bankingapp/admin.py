from django.contrib import admin
from .models import Transfer, Client

# Register your models here.
admin.site.register([Transfer, Client])
