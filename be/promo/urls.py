from django.conf.urls import url, include
from rest_framework import routers
from .views import PromoViewSet


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

router.register(r'promo', PromoViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = (
    url(r'^', include(router.urls)),
)