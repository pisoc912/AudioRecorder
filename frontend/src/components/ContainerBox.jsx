import { Box } from "@mui/material";

const ContainerBox = ({ children }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 4 }}>
        {children}
    </Box>
);
export default ContainerBox