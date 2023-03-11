import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Typography, Button , TextField, Container, Paper, makeStyles, MenuItem} from '@mui/material'
import { useParams } from 'react-router-dom';



const ProfileForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')


    useEffect(()=>{
        fetch(`http://localhost:8000/user/${localStorage.getItem('userId')}`)
        .then(res=>res.json())
        .then((result)=>{
          console.log("test")
          console.log(result.name) 
          setName(result.name);
          setEmail(result.email);
          
          

        }
      )
      },[])
    


    const handleClick= async (e)=>{
    e.preventDefault()
    try {

        const response = await fetch('http://localhost:8000/tour/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'name': name, 'email': email})
        });
    
        if (response.ok) {
          // redirect to dashboard page
          navigate('/');

        } else {
          throw new Error('Tour Create failed');
        }
      } catch (error) {
        console.error(error);
        // display error message to user
      }
}


    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Profile</h1>

                <Stack 
                sx={{
                    '& .MuiTextField-root': { mb: 2}
                }}
                noValidate 
                autoComplete="off" >
                
                    <TextField id="outlined-basic"   variant="outlined" fullWidth
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <TextField id="outlined-basic" defaultValue="hi" variant="outlined" fullWidth
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    /> 

                    
                    



                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Update Profile
                    </Button>

                </Stack>

            </Paper>
        </Container>
    );
}

export default ProfileForm;
