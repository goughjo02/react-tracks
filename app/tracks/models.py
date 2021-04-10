from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.


class Track(models.Model):
    title = models.CharField(max_length=50)
    # set blank True to allow nullable value
    description = models.TextField(blank=True)
    url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    # set null to true because otherwise migrations will be incompatible
    posted_by = models.ForeignKey(
        get_user_model(), null=True, on_delete=models.CASCADE)
