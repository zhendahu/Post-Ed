# Generated by Django 4.0.4 on 2022-05-30 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posted_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='team_password',
            field=models.CharField(default=10, max_length=25),
            preserve_default=False,
        ),
    ]