from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Publicacion
from .serializers import PublicacionSerializer
from django.http import JsonResponse
import json
from .forms import PublicacionForm
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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