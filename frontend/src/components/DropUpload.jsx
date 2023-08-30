import React, { useRef, useState } from "react";
import { Typography, Card, IconButton } from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const DropUpload = ({ onUpload }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileDrop = (event) => {
        event.preventDefault();
        setIsDragOver(false);

        if (event.dataTransfer.items && event.dataTransfer.items[0]) {
            const file = event.dataTransfer.items[0].getAsFile();
            processFile(file);
        }
    };

    const processFile = (file) => {
        if (file) {
            onUpload(file);
        }
    };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            processFile(file);
        }
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <Card
                sx={{
                    border: isDragOver ? "2px solid #3fcfa4" : "2px dashed #3fcfa4",
                    height: "300px",
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexDirection: "column",
                    backgroundColor: '#faf7f5!important',
                    py: 2,
                    my: 2
                }}
                onDragEnter={() => setIsDragOver(true)}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={openFileDialog}
            >
                <Typography variant="h6" sx={{ py: 3, color: '#3fcfa4' }}>Drop a file or click to upload</Typography>
                <IconButton sx={{ backgroundColor: '#3fcfa4' }}>
                    <CloudUploadOutlinedIcon sx={{ fontSize: 60 }} />
                </IconButton>

                <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
            </Card>
        </>
    );
};

export default DropUpload;

