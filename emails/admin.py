from django.contrib import admin

from .models import EmailAddress, EmailMetadata

admin.site.register(EmailAddress)
admin.site.register(EmailMetadata)
