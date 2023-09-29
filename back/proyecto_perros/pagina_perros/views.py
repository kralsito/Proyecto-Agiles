from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Publicacion , Usuario
from .serializers import PublicacionSerializer , UsuarioSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

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
    permission_classes = [AllowAny]  # Esto permite que cualquier usuario pueda crear una cuenta

    def perform_create(self, serializer):
        print("Creating user...")
        serializer.save()