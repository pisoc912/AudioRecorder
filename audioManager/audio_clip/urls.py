from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('audio/', views.get_Audio, name='get_audio'),
    path('upload-audio/', views.audio_upload_view, name='upload_audio'),
    path('audio/<int:audio_id>/delete/', views.delete_audio, name='delete_audio'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
