import { Box, Button, CircularProgress, Typography } from '@mui/material';
import ContainerBox from './ContainerBox';

const AudioControl = ({ status, startRecording, stopRecording, setShowSave }) => {
    return (
        <ContainerBox>
            {status === "recording" && <Box><CircularProgress /><Typography variant="h6" sx={{ py: 4 }}>{status}</Typography></Box>}
            {status !== "recording" ? (
                <Button variant='contained' sx={{ backgroundColor: '#3fcfa4', width: '90%', my: 6, py: 2 }} onClick={startRecording} >Start Recording</Button>
            ) : (
                <Button onClick={() => { stopRecording(); setShowSave(true); }} variant='outlined' sx={{ width: '90%' }}>Stop Recording</Button>
            )}
        </ContainerBox>
    );
}

export default AudioControl;
