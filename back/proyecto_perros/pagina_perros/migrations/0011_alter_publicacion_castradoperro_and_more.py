# Generated by Django 4.2.5 on 2023-10-27 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0010_alter_publicacion_castradoperro_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicacion',
            name='castradoPerro',
            field=models.CharField(max_length=3),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='desparasitadoPerro',
            field=models.CharField(max_length=3),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='libretaPerro',
            field=models.CharField(max_length=3),
        ),
    ]
