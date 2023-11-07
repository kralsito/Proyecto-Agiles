from django.contrib import admin
from .models import Publicacion, User, Perfil, Favorito
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()

@admin.register(Publicacion)
class PublicacionAdmin(admin.ModelAdmin):
    pass

admin.site.register(User)

@admin.register(Perfil)
class PerfilAdmin(admin.ModelAdmin):
    pass

@admin.register(Favorito)
class FavoritoAdmin(admin.ModelAdmin):
    pass