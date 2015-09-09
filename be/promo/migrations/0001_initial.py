# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Promo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('status', models.IntegerField(default=1, choices=[(1, b'Disponible'), (2, b'Rentado')])),
                ('longitude', models.CharField(max_length=120)),
                ('latitude', models.CharField(max_length=120)),
                ('category', models.IntegerField(default=1, choices=[(1, b'Espectacular'), (2, b'Valla Fija'), (3, b'Puentes'), (4, b'Pantalla Elctr&oacute;nica')])),
                ('address', models.CharField(max_length=240)),
                ('area', models.CharField(max_length=120)),
                ('light', models.BooleanField(default=True)),
                ('image_front', models.URLField(default=b'', max_length=500)),
                ('image_back', models.URLField(default=b'', max_length=500)),
            ],
        ),
    ]
