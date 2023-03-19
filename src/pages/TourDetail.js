import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';




const TourDetail = () => {
    const [tourDetail, setTourDetail] = useState({});
    const [booking, setBooking] = useState([]);
    const { id } = useParams();

    const handleClick=(e)=>{
        e.preventDefault()
        
        fetch(`http://localhost:8000/user/${localStorage.getItem("userId")}/booking`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:id
        }).then(()=>{
        console.log("Booked: ", id)
        // refresh the page
        booking.push(id)
        console.log(booking)
        localStorage.setItem("booking",JSON.stringify(booking))
        })
    
        
        
    }

    useEffect(()=>{
        fetch(`http://localhost:8000/tour/${id}`)
        .then(res=>res.json())
        .then((result)=>{
          console.log("test")
          console.log(result) 
          setTourDetail(result);
        })
      },[])
      if (!tourDetail) return <div>No Data</div>;
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
                <img src={tourDetail.image} alt={tourDetail.name} loading="lazy" className="detail-image" />
                <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                    <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                    {tourDetail.name}
                    </Typography>
                    <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                        {tourDetail.description}
                    </Typography>
                    <Button sx={{ ml: '21px', color: '#fff', background: 'blue', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} onClick={handleClick} >
                        Book now!
                    </Button>
                    <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                        Available dates:
                    </Typography>
                    {/* {tourDetail.availableDates.map((date, index) => (
                        // turn 2023-05-04T16:00:00.000+00:00 to 2023-05-04
                        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C" key={index}>
                            {date}
                            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        Book now!
                    </Button>
                        </Typography>
                    ))} */}

                    
                </Stack>
            </Stack>
        </Box>
    );

    
};



export default TourDetail;