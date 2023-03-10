import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Typography, Button , TextField, Container, Paper, makeStyles, MenuItem} from '@mui/material'



const LoginForm = () => {
    const navigate = useNavigate();
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[address,setAddress]=useState('')
    const[password,setPassword]=useState('')
    const[isLoggedIn,setIsLoggedIn]=useState(false)

    const handleClick= async (e)=>{
    e.preventDefault()
    try {


        const response = await fetch('http://localhost:8000/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'email': address, 'password': password })
        });

        
    
        if (response.ok) {
         
            console.log("Logged in")
            console.log("Storing info")
            fetch(`http://localhost:8000/user/${address}`)
                .then(res=>res.json())
                .then((result)=>{
                console.log("test")
                console.log(result) 
        
                localStorage.setItem('userId', result.id);
                localStorage.setItem('name', result.name);
                localStorage.setItem('email', result.email);
                localStorage.setItem('isTourProvider', result.tourProvider);
                localStorage.setItem('isLoggedIn', true);
                window.location.href = '/';
                }
            )

        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error(error);
        // display error message to user
      }
}


    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Login</h1>

                <Stack 
                sx={{
                    '& .MuiTextField-root': { mb: 2}
                }}
                noValidate 
                autoComplete="off" >
                
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    /> 

                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Login
                    </Button>

                </Stack>

            </Paper>
        </Container>
    );
}

export default LoginForm;
