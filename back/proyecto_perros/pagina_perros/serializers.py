from rest_framework import serializers
from .models import Publicacion, Usuario

class PublicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicacion
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'email', 'nombreUsuario', 'apellidoUsuario', 'telefono', 'provincia', 'localidad')
        extra_kwargs = {
            'contraseña': {'write_only': True},  # Para que la contraseña no sea visible en respuestas GET
        }

    def create(self, validated_data):
        # Utiliza el método `create_user` del manager para crear un nuevo usuario
        user = Usuario.objects.create_user(
            email=validated_data['email'],
            contraseña=validated_data['contraseña'],
            nombreUsuario=validated_data['nombreUsuario'],
            apellidoUsuario=validated_data['apellidoUsuario'],
            telefono=validated_data['telefono'],
            provincia=validated_data['provincia'],
            localidad=validated_data['localidad']
        )
        return user
