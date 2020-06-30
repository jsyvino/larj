from django.contrib import admin
from django.urls import include, path
from emails.views import index

urlpatterns = [
    path('emails/', include('emails.urls')),
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('/', index, name='index'),
]
