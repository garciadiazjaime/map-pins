from rest_framework import serializers
from .models import Promo


class PromoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Promo
        fields = ('id', 'status', 'longitude', 'latitude', 'category', 'address', 'area', 'light', 'image_front', 'image_back')