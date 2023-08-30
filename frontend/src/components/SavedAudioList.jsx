import { Box, Button, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import AlertDialog from './AlertDialog';

const SavedAudioList = ({ savedAudios, handleDelete }) => {
    const [selectedAudioId, setSelectedAudioId] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDeleteClick = (audioId) => {
        setSelectedAudioId(audioId);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setSelectedAudioId(null);
        setDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        if (selectedAudioId !== null) {
            handleDelete(selectedAudioId);
            handleDialogClose();
        }
    };

    return (
        <>
            <Box sx={{
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                backgroundColor: '#f5f5f5',
                padding: '24px',
                borderRadius: '8px',
            }}>
                <Typography variant="h4" sx={{ marginBottom: '16px' }}>Saved Recordings</Typography>
                <List>
                    {savedAudios.map(audio => (
                        <ListItem key={audio.id} disablePadding sx={{ border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '16px', padding: '16px', backgroundColor: '#faf7f5' }}>
                            <ListItemText primary={audio.title} sx={{ px: 4 }} />
                            <audio src={`http://localhost:8000${audio.audio_file}`} controls style={{ width: '100%', display: 'block' }} />
                            <ListItemButton onClick={() => handleDeleteClick(audio.id)}>
                                <Button variant='contained' color='error'>Delete</Button>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <AlertDialog
                    open={dialogOpen}
                    handleClose={handleDialogClose}
                    handleConfirm={handleConfirmDelete}
                    title="Confirm Delete"
                    content="Are you sure you want to delete this audio?"
                />
            </Box>
        </>
    );
}

export default SavedAudioList;
