from rest_framework import serializers
from .models import Publicacion, Usuario
from django.contrib.auth.hashers import make_password

class PublicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicacion
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'email', 'nombreUsuario', 'apellidoUsuario', 'telefono', 'provincia', 'localidad')
        extra_kwargs = {
            'password': {'write_only': True},  # Para que la password no sea visible en respuestas GET
        }

    def create(self, validated_data):
        
        email = validated_data.get('email')
        password = validated_data.get('password')
        nombreUsuario = validated_data.get('nombreUsuario')
        apellidoUsuario = validated_data.get('apellidoUsuario')
        telefono = validated_data.get('telefono')
        provincia = validated_data.get('provincia')
        localidad = validated_data.get('localidad')

        
        hashed_password = make_password(password)

        user = Usuario.objects.create_user(
            email=email,
            password=hashed_password,  
            nombreUsuario=nombreUsuario,
            apellidoUsuario=apellidoUsuario,
            telefono=telefono,
            provincia=provincia,
            localidad=localidad
        )
        return user

