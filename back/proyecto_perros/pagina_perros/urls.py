from django.urls import path
from .views import PublicacionList, PublicacionCreateView, RegisterView, LoginView, UserView, LogoutView, MiPerfilView, PerfilCreateView, VerPerfilDeOtroUsuarioView, PublicacionUpdateView, FavoritosListView, AgregarFavoritoView, PublicacionDeleteView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('publicaciones/alta/', PublicacionCreateView.as_view(), name = 'publi-alta'),
    path('publicaciones/', PublicacionList.as_view(), name = 'publi-list'),
    path('publicaciones/<int:publicacion_id>/', PublicacionUpdateView.as_view(), name = 'ver-publi'),
    path('publicaciones/eliminar/<int:publicacion_id>/', PublicacionDeleteView.as_view(), name='eliminar-publi'),
    path('usuario/registrar/', RegisterView.as_view(), name='registrar-usuario'),
    path('usuario/login/', LoginView.as_view(), name='login'),
    path('usuario/', UserView.as_view()),
    path('usuario/logout/', LogoutView.as_view()),
    path('usuario/mi-perfil/', MiPerfilView.as_view(), name='mi_perfil'),
    path('perfil/alta/', PerfilCreateView.as_view(), name='perfil-alta'),
    path('ver-perfil/<int:user_id>/', VerPerfilDeOtroUsuarioView.as_view(), name='ver-perfil'),
    path('favoritos/', FavoritosListView.as_view(), name='favoritos-list'),
    path('publicaciones/<int:publicacion_id>/favorito/', AgregarFavoritoView, name='agregar-favorito'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


