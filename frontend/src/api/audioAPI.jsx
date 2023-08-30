import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchSavedAudios = async () => {
    const response = await axios.get(`${BASE_URL}/audio/`);
    return response.data;
};

export const uploadAudio = async (formData) => {
    const response = await axios.post(`${BASE_URL}/upload-audio/`, formData);
    return response.data;
};

export const deleteAudio = (audioId) => {
    return axios.delete(`${BASE_URL}/audio/${audioId}/delete/`);
};





