from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('emails/', include('emails.urls')),
    path('admin/', admin.site.urls),
]
