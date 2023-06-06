from django.urls import path
from .views import homeView,reviewView,successView

urlpatterns = [
    path('',homeView,name='home_url'),
    path('review/',reviewView, name='review_url'),
    path('success/',successView,name='success_url')
]
