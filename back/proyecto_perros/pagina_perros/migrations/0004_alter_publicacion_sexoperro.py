# Generated by Django 4.2.4 on 2023-09-28 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0003_alter_publicacion_sexoperro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicacion',
            name='sexoPerro',
            field=models.CharField(choices=[('Macho', 'Macho'), ('Hembra', 'Hembra')], max_length=15),
        ),
    ]
