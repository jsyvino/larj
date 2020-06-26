from __future__ import unicode_literals

from django.db import models


class EmailAddress(models.Model):
    email_address = models.EmailField(max_length=254, unique=True)

    def __str__(self):
        return self.email_address


class EmailMetadata(models.Model):
    subject = models.CharField(max_length=508)
    body_text = models.TextField()
    description = models.TextField(null=True, blank=True)
    recipient = models.ManyToManyField(EmailAddress, blank=True)

    def __str__(self):
            return '{}-{}'.format(self.subject, self.description)

    class Meta:
        ordering = ('subject',)
