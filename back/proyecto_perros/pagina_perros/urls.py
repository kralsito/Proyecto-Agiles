from django.urls import path
from .views import PublicacionList, PublicacionCreateView , RegisterView, LoginView, UserView, LogoutView, MiPerfilView, PerfilCreateView, PerfilUpdateView, VerPerfilDeOtroUsuarioView, PublicacionUpdateView
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('publicaciones/alta/', PublicacionCreateView.as_view(), name = 'publi-alta'),
    path('publicaciones/', PublicacionList.as_view(), name = 'publi-list'),
    path('publicaciones/<int:publicacion_id>/', PublicacionUpdateView.as_view(), name = 'ver-publi'),
    path('usuario/registrar/', RegisterView.as_view(), name='registrar-usuario'),
    path('usuario/login/', LoginView.as_view(), name='login'),
    path('usuario/', UserView.as_view()),
    path('usuario/logout/', LogoutView.as_view()),
    path('usuario/mi-perfil/', MiPerfilView.as_view(), name='mi_perfil'),
    path('usuario/mi-perfil/<int:perfil_id>/', PerfilUpdateView.as_view(), name='mi_perfil_edit'),
    path('perfil/alta/', PerfilCreateView.as_view(), name = 'perfil-alta'),
    path('ver-perfil/<int:user_id>/', VerPerfilDeOtroUsuarioView.as_view(), name='ver-perfil'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

