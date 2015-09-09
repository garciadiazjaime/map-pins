from django.shortcuts import render
from rest_framework import viewsets

from .models import Promo
from .serializers import PromoSerializer


################ QUOTE ################

# ViewSets define the view behavior.
class PromoViewSet(viewsets.ModelViewSet):
    queryset = Promo.objects.all()
    serializer_class = PromoSerializer

