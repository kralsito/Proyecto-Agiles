# Generated by Django 4.2.5 on 2023-11-04 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0013_publicacion_vacunadoperro'),
    ]

    operations = [
        migrations.AddField(
            model_name='perfil',
            name='biografia',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='perfil',
            name='fotoPerfil',
            field=models.ImageField(blank=True, null=True, upload_to='./perfil'),
        ),
    ]
