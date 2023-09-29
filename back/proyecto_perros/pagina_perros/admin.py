from django.contrib import admin
from .models import Publicacion, Usuario
# Register your models here.

@admin.register(Publicacion)
class PublicacionAdmin(admin.ModelAdmin):
    pass

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('email', 'get_nombreUsuario', 'get_apellidoUsuario', 'is_staff', 'is_active', 'date_joined')
    search_fields = ('email', 'nombreUsuario', 'apellidoUsuario')
    list_filter = ('is_staff', 'is_active')
    ordering = ('-date_joined',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Información personal', {'fields': ('nombreUsuario', 'apellidoUsuario', 'telefono', 'provincia', 'localidad')}),
        ('Permisos', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

    def get_nombreUsuario(self, obj):
        return obj.nombreUsuario

    def get_apellidoUsuario(self, obj):
        return obj.apellidoUsuario

    get_nombreUsuario.short_description = 'Nombre'  # Etiqueta personalizada para el encabezado
    get_apellidoUsuario.short_description = 'Apellido'    # Etiqueta personalizada para el encabezado

admin.site.register(Usuario, UsuarioAdmin)
