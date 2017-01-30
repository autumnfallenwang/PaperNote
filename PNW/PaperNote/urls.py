from django.conf.urls import url
from PaperNote import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
]

