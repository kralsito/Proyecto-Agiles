from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import Group, Permission
# Create your models here.

class Publicacion(models.Model):
    nombrePerro = models.CharField(max_length=30)
    fotoPerro = models.ImageField(upload_to="./perros", null=True, blank=True)
    edadPerro = models.CharField(max_length=20)
    SEXO_CHOICES = [
        ('Macho', 'Macho'),
        ('Hembra', 'Hembra'),
    ]
    sexoPerro = models.CharField(max_length=15, choices=SEXO_CHOICES)

    TAMANO_CHOICES = [
        ('Pequeño', 'Pequeño'),
        ('Mediano', 'Mediano'),
        ('Grande', 'Grande'),
    ]
    tamanioPerro = models.CharField(max_length=10, choices=TAMANO_CHOICES)

    #Funcion para retornar algo cuando llamo al objeto
    def __str__(self):
        return self.nombrePerro
    


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email es obligatorio')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Los superusuarios deben tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Los superusuarios deben tener is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class Usuario(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    nombreUsuario = models.CharField(max_length=30)
    apellidoUsuario = models.CharField(max_length=30)
    password = models.CharField(max_length=128)  
    telefono = models.CharField(max_length=15)
    provincia = models.CharField(max_length=100)
    localidad = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager()

    groups = models.ManyToManyField(Group, related_name='usuario_set', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='usuario_set', blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone', 'province', 'locality']

    def __str__(self):
        return self.email