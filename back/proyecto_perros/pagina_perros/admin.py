from django.contrib import admin
from .models import Publicacion
# Register your models here.

@admin.register(Publicacion)
class PublicacionAdmin(admin.ModelAdmin):
    pass