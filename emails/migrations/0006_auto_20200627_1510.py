# Generated by Django 2.2.13 on 2020-06-27 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emails', '0005_auto_20200627_1434'),
    ]

    operations = [
        migrations.AddField(
            model_name='emailmetadata',
            name='city',
            field=models.CharField(blank=True, help_text='OPTIONAL- city affected, if applicable', max_length=508, null=True),
        ),
        migrations.AddField(
            model_name='emailmetadata',
            name='state',
            field=models.CharField(blank=True, help_text='OPTIONAL- state affected, if applicable', max_length=508, null=True),
        ),
        migrations.AddField(
            model_name='emailmetadata',
            name='victim_name',
            field=models.CharField(blank=True, help_text='OPTIONAL- name of victim, if applicable', max_length=508, null=True),
        ),
        migrations.AlterField(
            model_name='emailmetadata',
            name='body_text',
            field=models.TextField(help_text='Body text of the email, excluding introduction and signature'),
        ),
        migrations.AlterField(
            model_name='emailmetadata',
            name='description',
            field=models.TextField(blank=True, help_text='OPTIONAL- Brief description of the cause for the user to learn more', null=True),
        ),
        migrations.AlterField(
            model_name='emailmetadata',
            name='subject',
            field=models.CharField(help_text='Subject of the email', max_length=508),
        ),
    ]