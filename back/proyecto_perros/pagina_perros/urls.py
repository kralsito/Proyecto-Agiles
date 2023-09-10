from django.urls import path
from .views import PublicacionCreate, PublicacionList

urlpatterns = [
    path('publicaciones/alta', PublicacionCreate.as_view(), name = 'publi-create'),
    path('publicaciones/', PublicacionList.as_view(), name = 'publi-list'),
]