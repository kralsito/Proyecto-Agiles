from django import forms
from .models import Publicacion

class PublicacionForm(forms.ModelForm):
    class Meta:
        model = Publicacion
        fields = ['nombrePerro', 'fotoPerro', 'edadPerro', 'sexoPerro', 'tamanioPerro']
