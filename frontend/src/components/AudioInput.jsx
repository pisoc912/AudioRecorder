import { Button, Stack, TextField, Typography } from '@mui/material';
import ContainerBox from './ContainerBox';
import { useState } from 'react';
import AlertDialog from './AlertDialog';

const AudioInput = ({ title, setTitle, handleSave, handleCancel }) => {
    const [alertOpen, setAlertOpen] = useState(false);
    const [error, setError] = useState(null);

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const handleRefresh = () => {
        window.location.reload();
    }

    const handleSaveClick = async () => {
        try {
            let response = await handleSave();
            console.log(response);
            if (response) {
                setAlertOpen(true);
            }
        } catch (error) {
            const error_info = error.response.data.title
            console.error("There was an error saving:", error_info);
            setError(error_info || "An unexpected error occurred.");
        }
    };

    return (
        <ContainerBox>
            <Typography>Type your file name:</Typography>
            <TextField
                variant="outlined"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {error ? <Typography color='red'>{error}</Typography> : null}
            <Stack direction='row' spacing={2}>
                <Button onClick={handleSaveClick}>Save Recording</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </Stack>

            <AlertDialog
                open={alertOpen}
                title="Save Successful"
                content="You have saved audio successfully!"
                handleClose={handleAlertClose}
                handleConfirm={handleRefresh} />
        </ContainerBox>
    );
}

export default AudioInput;
