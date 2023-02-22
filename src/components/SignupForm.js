import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Button , TextField, Container, Paper, makeStyles, MenuItem} from '@mui/material'



const SignupForm = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[password,setPassword]=useState('')
    const[role,setRole]=useState('')
   



    const handleClick=(e)=>{
    e.preventDefault()
    const user={name,address, password}
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
                <h1>Register</h1>

                <Stack 
                sx={{
                    '& .MuiTextField-root': { mb: 2}
                }}
                
                noValidate autoComplete="off" >
                
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                
                    />
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                    <TextField
                        id="outlined-select-currency"
                        select
                        
                        defaultValue="EUR"
                        helperText="Please select your role"
                        onChange={(e)=>setRole(e.target.value)}
                        >
                        <MenuItem key="Tourist" value="t">
                            Tourist
                        </MenuItem>
                        <MenuItem key="Tour Provider" value="tp">
                            Tour Provider
                        </MenuItem>
                    </TextField>       


                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </Stack>

            </Paper>
{/*         
        
            <h1>Students</h1>

            <Paper elevation={3} style={paperStyle}>

                {students.map(student=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                        Id:{student.id}<br/>
                        Name:{student.name}<br/>
                        Address:{student.email}

                    </Paper>
                ))}
                
            </Paper> */}
        </Container>
    );
}

export default SignupForm;
