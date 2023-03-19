import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Typography, Button , TextField, Container, Paper, makeStyles, MenuItem} from '@mui/material'
import { useParams } from 'react-router-dom';



const EditTourForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[desc,setDesc]=useState('')
    const[location,setLocation]=useState('')
    const[price,setPrice]=useState('')
    const[capacity,setCapacity]=useState('')
    const[guide,setGuide]=useState('')
    const[image,setImage]=useState('')
    const [tourDetail, setTourDetail] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:8000/tour/${id}`)
        .then(res=>res.json())
        .then((result)=>{
          console.log("test")
          console.log(result.name) 
          setTourDetail(result);
          setName(result.name);
          setDesc(result.description);
          setLocation(result.location);
          setPrice(result.price);
          setCapacity(result.maximumCapacity);
          setImage(result.image);

        }
      )
      },[])
    


    const handleClick= async (e)=>{
    e.preventDefault()
    try {
        const myValue = localStorage.getItem('userId');
        setGuide(myValue)
        console.log(id)
        console.log(name, desc, location, price, capacity, image, guide)
        console.log(JSON.stringify({ 'name': name, 'description': desc, 'location': location, 'price': parseFloat(price), 'maximumCapacity': parseInt(capacity), 'guideId': guide, 'image': image }))

        const response = await fetch(`http://localhost:8000/tour/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'name': name, 'description': desc, 'location': location, 'price': parseFloat(price), 'maximumCapacity': parseInt(capacity), 'guideId': guide, 'image': image })
        });
    
        if (response.ok) {
          // redirect to dashboard page
          navigate('/');

        } else {
          throw new Error('Tour Edit failed');
        }
      } catch (error) {
        console.error(error);
        // display error message to user
      }
}


    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Editing Tour</h1>

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

                    <TextField id="outlined-basic" defaultValue="hi" label="Tour Description" variant="outlined" fullWidth
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    /> 

                    <TextField id="outlined-basic" label="Tour Location" variant="outlined" fullWidth
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    />
                    
                    <TextField id="outlined-basic" label="Tour Price" variant="outlined" fullWidth
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Tour Capacity" variant="outlined" fullWidth
                    value={capacity}
                    onChange={(e)=>setCapacity(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Tour Image" variant="outlined" fullWidth
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    />



                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Edit Tour
                    </Button>

                </Stack>

            </Paper>
        </Container>
    );
}

export default EditTourForm;
