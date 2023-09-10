from django.shortcuts import render
from rest_framework import generics
from .models import Publicacion
from .serializers import PublicacionSerializer
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

# Create your views here.

class PublicacionCreate(CreateView):
    model = Publicacion
    fields = '__all__'
    serializer_class = PublicacionSerializer

class PublicacionList(generics.ListAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
