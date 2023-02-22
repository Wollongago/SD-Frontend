import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Button , TextField, Container, Paper, makeStyles, MenuItem} from '@mui/material'



const LoginForm = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[address,setAddress]=useState('')
    const[password,setPassword]=useState('')

    const handleClick=(e)=>{
    e.preventDefault()
    const user={address, password}
    console.log(user)
    fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)

    }).then(()=>{
    console.log("New User added")
    })
}

// useEffect(()=>{
//   fetch("http://localhost:8000/all")
//   .then(res=>res.json())
//   .then((result)=>{
//     setStudents(result);
//   }
// )
// },[])
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
