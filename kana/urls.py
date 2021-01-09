from django.urls import path
from .views import *

urlpatterns = [
    path('', HomeView, name='home'),
    path('blog/', BlogView, name='blog'),
    path('profile/', ProfileView, name='profile'),
    path('contact/', ContactView, name='contact'),
    path('single/', SingeView, name='single'),
]
