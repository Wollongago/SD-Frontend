import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Link, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TourCard from '../components/TourCard';



const Bookings = () => {
    const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const[isTourProvider,setIsTourProvider]=useState(false)
  useEffect(()=>{

    

    fetch(`http://localhost:8000/tour/${JSON.parse(localStorage.getItem('booking'))[0]}`)
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

        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Upcoming bookings</Typography>

        <img id="exerciseimage"src={exercises.image} alt={exercises.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#FCC757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
        >
          {exercises.location}
        </Button>
         <Button onClick={() => {localStorage.removeItem("booking");navigate('/')}} 
          sx={{
            ml: '21px',
            color: '#fff',
            background: 'red',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
          
        >
          Cancel
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: '24px', xs: '20px' } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercises.name}
      </Typography>
        
      </Box>
    </Box>
  );
};

export default Bookings;