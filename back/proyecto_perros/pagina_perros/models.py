from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import Group, Permission
from django.utils import timezone
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
    
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El Email es obligatorio')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=128)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Agregar related_name personalizado para evitar conflictos
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        related_name='custom_user_set',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        related_name='custom_user_set',
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()


   





