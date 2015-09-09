from django.contrib import admin

from .models import Promo

class PromoAdmin(admin.ModelAdmin):
	list_display = ('id', 'status', 'longitude', 'latitude', 'category', 'address', 'area', 'light', 'image_front', 'image_back')

admin.site.register(Promo, PromoAdmin)