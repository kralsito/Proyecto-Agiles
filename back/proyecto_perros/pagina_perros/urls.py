from django.urls import path
from .views import PublicacionCreate, PublicacionList
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('publicaciones/alta', PublicacionCreate.as_view(), name = 'publi-create'),
    path('publicaciones/', PublicacionList.as_view(), name = 'publi-list'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

