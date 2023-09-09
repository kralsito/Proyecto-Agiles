from django.urls import path
from .views import PublicacionCreate

urlpatterns = [
    path('publicaciones/', PublicacionCreate.as_view(), name = 'publi-create'),
]