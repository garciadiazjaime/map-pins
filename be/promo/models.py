from django.db import models

class Promo(models.Model):
	STATUS_CHOICES = (
		(1, 'Disponible'),
		(2, 'Rentado')
	)
	CATEGORY_CHOICES = (
		(1, 'Espectacular'),
		(2, 'Valla Fija'),
		(3, 'Puentes'),
		(4, 'Pantalla Elctronica')
	)
	status = models.IntegerField(choices=STATUS_CHOICES, default=1)
	longitude = models.CharField(max_length=120)
	latitude = models.CharField(max_length=120)
	category = models.IntegerField(choices=CATEGORY_CHOICES, default=1)
	address = models.CharField(max_length=240)
	area = models.CharField(max_length=120)
	light = models.BooleanField(default=True)
	image_front = models.URLField(max_length=500, default='')
	image_back = models.URLField(max_length=500, default='')

	def __str__(self):
		return "%s" % (self.id)