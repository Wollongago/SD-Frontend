import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Link, Button } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchTours';
import HeroBanner from '../components/HeroBanner';
import TourCard from '../components/TourCard';



const MyTours = () => {
  const [exercises, setExercises] = useState([]);
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const[isTourProvider,setIsTourProvider]=useState(false)
  useEffect(()=>{

    

    fetch("http://localhost:8000/tour/all")
    .then(res=>res.json())
    .then((result)=>{
        console.log(result);
        const test = result;
        console.log("test")
        console.log(test) 
        
        setExercises(result);
    }
    ).then( ()=>{
        setIsLoggedIn(localStorage.getItem('isLoggedIn'))
        console.log(isLoggedIn)
        setIsTourProvider(localStorage.getItem('isTourProvider'))
        console.log(isTourProvider)
        })

  },[])

  return (
    <Box>
      
      <Box id="exercises" sx={{ mt: { lg: '20px' } }} mt="50px" p="20px">

        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">My Created Tours</Typography>

        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
            
          {exercises.map((tour) => (
            <TourCard tour={tour} />

            
        ))}
        </Stack>
        
      </Box>
    </Box>
  );
};

export default MyTours;