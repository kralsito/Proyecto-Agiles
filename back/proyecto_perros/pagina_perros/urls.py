from django.urls import path
from .views import PublicacionList, PublicacionCreateView , UsuarioCreateView, LoginView
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('publicaciones/alta/', PublicacionCreateView.as_view(), name = 'publi-alta'),
    path('publicaciones/', PublicacionList.as_view(), name = 'publi-list'),
    path('usuario/registrar/', UsuarioCreateView.as_view(), name='registrar-usuario'),
    path('usuario/login/', LoginView.as_view(), name='login'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

