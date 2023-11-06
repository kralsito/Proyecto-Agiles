from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Publicacion , User, Perfil, Favorito
from .serializers import PublicacionSerializer , UserSerializer, PerfilSerializer, FavoritoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import Group
from rest_framework.exceptions import AuthenticationFailed, NotFound
import jwt, datetime
from rest_framework.permissions import IsAuthenticated  
from django.http import JsonResponse
# Create your views here.


class PublicacionList(generics.ListAPIView):
    serializer_class = PublicacionSerializer
    queryset = Publicacion.objects.none()  

    def list(self, request, *args, **kwargs):
        queryset = Publicacion.objects.all()  
        serializer = self.get_serializer(queryset, many=True)

        for publicacion in serializer.data:
            usuario_id = publicacion.get('usuario')
            usuario = User.objects.filter(id=usuario_id).first()
            if usuario:
                publicacion['usuario_email'] = usuario.email
        return Response(serializer.data)


class PublicacionCreateView(APIView):
    
    def post(self, request):
        serializer = PublicacionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterView(APIView):
    def post(self, request):
         serializer = UserSerializer(data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')  
        password = request.data.get('password')

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Contraseña incorrecta')
        
        # Obtener el perfil del usuario
        perfil = user.perfil  # Asegúrate de que el campo de perfil esté correctamente relacionado en tu modelo User

        payload = {
            'id': user.id,
            'email': user.email,
            'nombre_perfil': perfil.nombrePerfil if perfil else None,  # Obtener el nombre del perfil si existe
            'apellido_perfil': perfil.apellidoPerfil if perfil else None,  # Obtener el apellido del perfil si existe
            'localidad_perfil': perfil.localidad if perfil else None,  # Obtener la localidad del perfil si existe
            'telefono_perfil': perfil.telefono if perfil else None,  # Obtener el telefono del perfil si existe
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response

class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')
        
        user = User.objects.filter(id=payload['id']).first()
        perfil = user.perfil  # Obtener el perfil asociado al usuario

        if user and perfil:
            user_serializer = UserSerializer(user)
            perfil_serializer = PerfilSerializer(perfil)

            return Response({
                'user_data': user_serializer.data,
                'perfil_data': perfil_serializer.data
            })
        else:
            raise AuthenticationFailed('User not found')

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
    
class MiPerfilView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        perfil = user.perfil

        if perfil:
            serializer = PerfilSerializer(perfil)
            return Response(serializer.data)
        else:
            return Response({"mensaje": "El usuario no tiene un perfil."}, status=status.HTTP_404_NOT_FOUND)
class PerfilCreateView(APIView):
    def post(self, request):
         serializer = PerfilSerializer(data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)
    
class VerPerfilDeOtroUsuarioView(APIView):
    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
            perfil = user.perfil  
            if user and perfil:
                user_serializer = UserSerializer(user)
                perfil_serializer = PerfilSerializer(perfil)

                return Response({
                    'user_data': user_serializer.data,
                    'perfil_data': perfil_serializer.data
                })
            else:
                raise NotFound('User not found')
        except User.DoesNotExist:
            raise NotFound('User not found')

class PublicacionUpdateView(APIView):
    def put(self, request, publicacion_id):
        try:
            publicacion = Publicacion.objects.get(id=publicacion_id)
            publicacion.nombrePerro = request.data.get('nombrePerro')
            publicacion.edadPerro = request.data.get('edadPerro')
            publicacion.sexoPerro = request.data.get('sexoPerro')
            publicacion.tamanioPerro = request.data.get('tamanioPerro')
            publicacion.desparasitadoPerro = request.data.get('desparasitadoPerro')
            publicacion.libretaPerro = request.data.get('libretaPerro')
            publicacion.castradoPerro = request.data.get('castradoPerro')
            publicacion.vacunadoPerro = request.data.get('vacunadoPerro')
            nueva_foto = request.data.get('fotoPerro')
            if nueva_foto:
                publicacion.fotoPerro = nueva_foto
            if not nueva_foto:
                publicacion.fotoPerro = publicacion.fotoPerro
            publicacion.save()
            return Response({'message': 'Publicación actualizada correctamente'})
        except Publicacion.DoesNotExist:
            return Response({'error': 'La publicación no existe'}, status=status.HTTP_404_NOT_FOUND)

class AgregarAFavoritos(APIView):
    def post(self, request, publicacion_id):
        usuario = request.user
        publicacion = get_object_or_404(Publicacion, id=publicacion_id)

        favorito, created = Favorito.objects.get_or_create(usuario=usuario, publicacion=publicacion)

        if created:
            return Response({'mensaje': 'Agregado a favoritos'}, status=status.HTTP_201_CREATED)
        else:
            favorito.delete()
            return Response({'mensaje': 'Eliminado de favoritos'}, status=status.HTTP_204_NO_CONTENT)

class FavoritosListView(generics.ListAPIView):
    queryset = Favorito.objects.all()
    serializer_class = FavoritoSerializer
