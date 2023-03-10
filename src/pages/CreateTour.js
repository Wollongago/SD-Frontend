import React from 'react';
import { Box } from '@mui/material';
import CreateTourForm from "../components/CreateTourForm"




const CreateTour = () => (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">

        <CreateTourForm />

    </Box>
);

export default CreateTour;