from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import AudioClip
from .serializers import AudioSerializer
from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status


@api_view(['GET'])
def get_Audio(request):
    notes = AudioClip.objects.all()
    serializer = AudioSerializer(notes,many=True)
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes((MultiPartParser, FormParser))
def audio_upload_view(request):
    if request.method == 'POST':
        file_serializer = AudioSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_audio(request, audio_id):
    try:
        audio_clip = AudioClip.objects.get(id=audio_id)
        audio_clip.delete()
        return Response({"message": "Audio deleted successfully!"}, status=204)
    except AudioClip.DoesNotExist:
        return Response({"error": "Audio not found!"}, status=404)
