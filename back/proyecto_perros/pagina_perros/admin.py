from django.contrib import admin
from .models import Publicacion, Usuario
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()

@admin.register(Publicacion)
class PublicacionAdmin(admin.ModelAdmin):
    pass

admin.site.register(Usuario)