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
            'password': {'write_only': True},  # Para que la password no sea visible en respuestas GET
        }

    def create(self, validated_data):
        # Usa el método `get()` para acceder a los campos de manera segura
        email = validated_data.get('email')
        password = validated_data.get('password')
        nombreUsuario = validated_data.get('nombreUsuario')
        apellidoUsuario = validated_data.get('apellidoUsuario')
        telefono = validated_data.get('telefono')
        provincia = validated_data.get('provincia')
        localidad = validated_data.get('localidad')

   

        # Utiliza el método `create_user` del manager para crear un nuevo usuario
        user = Usuario.objects.create_user(
            email=email,
            password=password,
            nombreUsuario=nombreUsuario,
            apellidoUsuario=apellidoUsuario,
            telefono=telefono,
            provincia=provincia,
            localidad=localidad
        )
        return user

