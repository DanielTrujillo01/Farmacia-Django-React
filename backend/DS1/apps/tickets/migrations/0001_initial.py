# Generated by Django 5.1.7 on 2025-03-17 23:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UsuarioEspera',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('hora_llegada', models.DateTimeField()),
                ('hora_atencion', models.DateTimeField(blank=True, null=True)),
                ('hora_salida', models.DateTimeField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
        migrations.CreateModel(
            name='CajeroUsuarioEspera',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('cajero', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.cajero')),
                ('usuario_espera', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tickets.usuarioespera')),
            ],
            options={
                'unique_together': {('cajero', 'usuario_espera')},
            },
        ),
    ]
