# Generated by Django 4.2.5 on 2023-10-31 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0018_alter_publicacion_castradoperro_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicacion',
            name='castradoPerro',
            field=models.BooleanField(choices=[('true', 'true'), ('false', 'false')], default='false', max_length=5),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='desparasitadoPerro',
            field=models.BooleanField(choices=[('true', 'true'), ('false', 'false')], default='false', max_length=5),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='libretaPerro',
            field=models.BooleanField(choices=[('true', 'true'), ('false', 'false')], default='false', max_length=5),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='vacunadoPerro',
            field=models.BooleanField(choices=[('true', 'true'), ('false', 'false')], default='false', max_length=5),
        ),
    ]