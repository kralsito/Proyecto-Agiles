# Generated by Django 4.2.4 on 2023-10-16 06:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
    ]
