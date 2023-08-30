from rest_framework import serializers
from .models import AudioClip

class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioClip
        fields = '__all__'
       
    def validate_title(self, value):
        if AudioClip.objects.filter(title=value).exists():
            raise serializers.ValidationError("File with this title already exists.")
        return value
