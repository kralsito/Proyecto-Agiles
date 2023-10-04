from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Publicacion , Usuario
from .serializers import PublicacionSerializer , UsuarioSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import Group

# Create your views here.


class PublicacionList(generics.ListAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer

class PublicacionCreateView(APIView):
    def post(self, request):
        serializer = PublicacionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UsuarioCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')  

        hashed_password = make_password(password)
        serializer.save(password=hashed_password)

        user = serializer.save(password=hashed_password)
        grupo_usuarios_normales, creado = Group.objects.get_or_create(name='Usuarios normales')
        user.groups.add(grupo_usuarios_normales)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('email')  
        password = request.data.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
                return Response({'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
        return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)