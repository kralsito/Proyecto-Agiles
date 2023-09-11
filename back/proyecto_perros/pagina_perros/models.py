from django.db import models

# Create your models here.

class Publicacion(models.Model):
    nombrePerro = models.CharField(max_length=30)
    fotoPerro = models.ImageField(upload_to="./perros", null=True, blank=True)
    edadPerro = models.CharField(max_length=20)
    SEXO_CHOICES = [
        ('M', 'Macho'),
        ('H', 'Hembra'),
    ]
    sexoPerro = models.CharField(max_length=3, choices=SEXO_CHOICES)

    TAMANO_CHOICES = [
        ('Pequeño', 'Pequeño'),
        ('Mediano', 'Mediano'),
        ('Grande', 'Grande'),
    ]
    tamanioPerro = models.CharField(max_length=10, choices=TAMANO_CHOICES)

    #Funcion para retornar algo cuando llamo al objeto
    def __str__(self):
        return self.nombrePerro
    