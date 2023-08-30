import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';

const AlertDialog = ({ open, title, content, confirmText, cancelText, handleConfirm, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    {cancelText || 'Cancel'}
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    {confirmText || 'Confirm'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertDialog;
