from __future__ import unicode_literals

from django.db import models


class EmailAddress(models.Model):
    email_address = models.EmailField(max_length=254)

    def __str__(self):
        return self.email_address


class EmailMetadata(models.Model):
    subject = models.CharField(max_length=508, help_text="Subject of the email")
    body_text = models.TextField(help_text="Body text of the email, excluding introduction and signature")
    description = models.TextField(null=True, blank=True, help_text="OPTIONAL- Brief description of the cause for the user to learn more")
    victim_name = models.CharField(max_length=508, null=True, blank=True,  help_text="OPTIONAL- name of victim, if applicable")
    city = models.CharField(max_length=508, null=True, blank=True,  help_text="OPTIONAL- city affected, if applicable")
    state = models.CharField(max_length=508, null=True, blank=True,  help_text="OPTIONAL- state affected, if applicable")
    recipient = models.ManyToManyField(EmailAddress, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
            return '{}-{}...'.format(self.subject, self.description[0:300])

    class Meta:
        ordering = ('modified', 'created',)


class Sent(models.Model):
    cause = models.ManyToManyField(EmailMetadata)
    name = models.CharField(max_length=508, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{}-{}'.format(self.cause, self.created)

    class Meta:
        ordering = ('created',)
