# Generated by Django 5.0.4 on 2024-04-11 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0025_alter_perfil_fotoperfil_alter_publicacion_fotoperro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicacion',
            name='fotoPerro',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
