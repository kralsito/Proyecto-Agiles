# Generated by Django 4.2.5 on 2023-10-26 20:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0005_alter_perfil_usuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='perfil',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='publicacion',
            name='usuario',
        ),
        migrations.AddField(
            model_name='user',
            name='perfil',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='pagina_perros.perfil'),
        ),
    ]
