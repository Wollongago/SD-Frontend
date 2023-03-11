import React from 'react';
import { Box } from '@mui/material';
import EditTourForm from '../components/EditTourForm';




const CreateTour = () => (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">

        <EditTourForm />

    </Box>
);

export default CreateTour;