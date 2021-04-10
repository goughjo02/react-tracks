from django.db import models

# Create your models here.
class Track(models.Model):
    title = models.CharField(max_length=50)
    # set blank True to allow nullable value
    description = models.TextField(blank=True)
    url = models.URLField()
    created_at= models.DateTimeField(auto_now_add=True)
