import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/homebanner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'}, 
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Malkman's Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mb="23px" mt="30px"
        >
            Lift, Intra <br /> Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Check out exercises alternatives
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#FF2625', padding: '10px' }}>Explore Exercises</Button>
        
        
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner