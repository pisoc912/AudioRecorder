from django.db import models

# Create your models here.

class AudioClip(models.Model):
    title = models.CharField(max_length=255)
    audio_file = models.FileField(upload_to='audio_clips/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

