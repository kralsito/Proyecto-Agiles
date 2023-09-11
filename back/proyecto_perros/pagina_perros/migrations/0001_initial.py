# Generated by Django 4.2.4 on 2023-09-09 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='publicacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombrePerro', models.CharField(max_length=30)),
                ('edadPerro', models.CharField(max_length=20)),
                ('sexoPerro', models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], max_length=1)),
                ('tamañoPerro', models.CharField(choices=[('Pequeño', 'Pequeño'), ('Mediano', 'Mediano'), ('Grande', 'Grande')], max_length=10)),
            ],
        ),
    ]