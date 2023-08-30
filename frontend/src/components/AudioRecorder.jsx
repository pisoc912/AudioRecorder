import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import { v4 as uuidv4 } from 'uuid';
import { deleteAudio, fetchSavedAudios, uploadAudio } from '../api/audioAPI';
import SavedAudioList from './SavedAudioList';
import AudioControl from './AudioControl';
import AudioInput from './AudioInput';
import DropUpload from './DropUpload';
import ContainerBox from './ContainerBox';

const AudioRecorder = () => {
    const [title, setTitle] = useState('');
    const [showSave, setShowSave] = useState(false);
    const [savedAudios, setSavedAudios] = useState([]);
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ audio: true, video: false });
    useEffect(() => {
        fetchSavedAudios()
            .then(data => {
                setSavedAudios(data);
            })
            .catch(error => {
                console.error("There was an error fetching saved audios:", error);
            });
    }, []);

    const handleSave = async () => {
        const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
        const fileTitle = `record_${Date.now()}_${uuidv4().slice(0, 4)}.wav`;
        const audio_file = new File([audioBlob], fileTitle, { type: 'audio/wav' });
        const formData = new FormData();

        formData.append('audio_file', audio_file);
        formData.append('title', title);

        try {
            const response = await uploadAudio(formData);
            console.log("Audio saved:", response);
            return response;
        } catch (error) {
            console.error("There was an error uploading the audio:", error);
            throw error;
        }
    };

    const handleDelete = (audioId) => {
        deleteAudio(audioId)
            .then(response => {
                if (response.status === 204) {
                    window.location.reload()
                } else {
                    alert("Error deleting audio!");
                }
            })
            .catch(error => {
                console.error("There was an error deleting the audio:", error);
            });
    };

    const handleAudioUpload = async (file) => {

        if (!file.type.startsWith("audio/")) {
            alert("Please upload a valid audio file.");
            return;
        }

        const formData = new FormData();
        formData.append('audio_file', file);
        formData.append('title', file.name);

        uploadAudio(formData)
            .then(data => {
                console.log("Audio uploaded:", data);
            })
            .catch(error => {
                console.error("There was an error uploading the audio:", error);
            });
    };

    const handleCancel = () => {
        setShowSave(false);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#faf7f5!important', p: 4 }}>
            <Typography variant="h3" sx={{ py: 4 }}>Audio Recorder</Typography>
            <Grid container>
                <Grid item xs={6}>
                    {!showSave ? <AudioControl {...{ status, startRecording, stopRecording, setShowSave }} /> : <AudioInput {...{ title, setTitle, handleSave, handleCancel }} />}
                    <ContainerBox>
                        <audio src={mediaBlobUrl} controls autoPlay style={{ width: '100%', display: 'block' }} />
                    </ContainerBox>
                </Grid>
                <Divider />
                <Grid item xs={6}>
                    <DropUpload onUpload={handleAudioUpload} />
                </Grid>
            </Grid>
            <SavedAudioList savedAudios={savedAudios} handleDelete={handleDelete} />
        </Box>

    );
}

export default AudioRecorder;
