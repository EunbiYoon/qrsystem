from django.urls import path
from .views import homeView,reviewView

urlpatterns = [
    path('',homeView,name='home_url'),
    path('review/',reviewView, name='review_url')
]
