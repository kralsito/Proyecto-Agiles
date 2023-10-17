from django.urls import path
from .views import PublicacionList, PublicacionCreateView , RegisterView, LoginView, UserView, LogoutView, MiPerfilView
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('publicaciones/alta/', PublicacionCreateView.as_view(), name = 'publi-alta'),
    path('publicaciones/', PublicacionList.as_view(), name = 'publi-list'),
    path('usuario/registrar/', RegisterView.as_view(), name='registrar-usuario'),
    path('usuario/login/', LoginView.as_view(), name='login'),
    path('usuario/', UserView.as_view()),
    path('usuario/logout/', LogoutView.as_view()),
    path('mi-perfil/', MiPerfilView.as_view(), name='mi_perfil'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

