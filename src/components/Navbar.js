import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


import Logo from '../assets/images/Logo.png';


const Navbar = () => {
  //use state to check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: {sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212'}}>Home</Link>
        <Link to="/bookings" style={{ textDecoration: 'none', color: '#3A1212'}}>Booking</Link>
        <Link to="/register" style={{ textDecoration: 'none', color: '#3A1212'}}>Register</Link>
        {isLoggedIn ? <Link to="/logout" style={{ textDecoration: 'none', color: '#3A1212'}}>Logout</Link> : <Link to="/login" style={{ textDecoration: 'none', color: '#3A1212'}}>Login</Link>}
      </Stack>
    </Stack>
  )
}

export default Navbar