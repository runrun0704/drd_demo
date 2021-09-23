from django.db import models

# Create your models here.
class User(models.Model):
    user = models.CharField(max_length=180)
    age = models.IntegerField()

def __str__(self):
    return self.user
    return self.age    