# Generated by Django 4.0.4 on 2022-05-30 18:23

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('posted_app', '0002_team_team_users'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='team_users',
        ),
        migrations.AddField(
            model_name='team',
            name='team_users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
