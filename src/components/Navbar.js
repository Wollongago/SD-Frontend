import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import Logo from '../assets/images/Logo.png';



const Navbar = () => {

  const navigate = useNavigate();
  useEffect(() => {
    setIsTourProvider(localStorage.getItem('isTourProvider'))
    console.log("Navbar Tour Provider:",isTourProvider)
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
    console.log("Logged in:", isLoggedIn)
    

  }, [])
  
  
  //use state to check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isTourProvider, setIsTourProvider] = useState();
  
  
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ gap: {sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
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
        {isTourProvider ? <Link to="/mytours" style={{ textDecoration: 'none', color: '#3A1212'}}>My Tours</Link> : null}
        <Link to="/bookings" style={{  textDecoration: 'none', color: '#3A1212'}}>My Bookings</Link>  
        {isTourProvider &&  <Link to="/create" style={{ textDecoration: 'none', color: '#3A1212'}}>Create</Link>}
        <Link to="/register" style={{ textDecoration: 'none', color: '#3A1212'}}>Register</Link>
        {isLoggedIn ? <Link onClick={() => {localStorage.clear().then(navigate("/")) }} style={{  textDecoration: 'none', color: '#3A1212'}}>Logout</Link> : <Link to="/login" style={{ textDecoration: 'none', color: '#3A1212'}}>Login</Link>}
        {isLoggedIn && <Avatar  alt="user profile" src="src/assets/icons/gym.png" />}
      </Stack>
    </Stack>
  )
}

export default Navbar
