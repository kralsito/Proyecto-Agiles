# Generated by Django 4.2.5 on 2023-10-31 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0014_alter_publicacion_castradoperro_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicacion',
            name='castradoPerro',
            field=models.BooleanField(choices=[('Si', 'Si'), ('No', 'No')], default='False', max_length=5),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='desparasitadoPerro',
            field=models.BooleanField(choices=[('Si', 'Si'), ('No', 'No')], default='False', max_length=5),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='libretaPerro',
            field=models.BooleanField(choices=[('Si', 'Si'), ('No', 'No')], default='False', max_length=5),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='vacunadoPerro',
            field=models.BooleanField(choices=[('Si', 'Si'), ('No', 'No')], default='False', max_length=5),
        ),
    ]
