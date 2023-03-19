import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const TourCard = ({ tour }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isTourProvider, setIsTourProvider] = useState();

  useEffect(() => {
    setIsTourProvider(localStorage.getItem('isTourProvider'));
    console.log("Tour Provider:", isTourProvider);
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    console.log("Logged in:", isLoggedIn);
  }, []);

  return (
    <Link className="exercise-card" to={`/tour/${tour.id}`}>
      <img src={tour.image} alt={tour.name} loading="lazy" />
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
          {tour.location}
        </Button>
        {isTourProvider && <Button onClick={() => { window.location.href = `/edit-tour/${tour.id}`;}}
          sx={{
            ml: '21px',
            color: '#fff',
            background: 'blue',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
          
        >
          edit
        </Button>}
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
        {tour.name}
      </Typography>
    </Link>
  );
};

export default TourCard;
