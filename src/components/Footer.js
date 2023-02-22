import React from 'react';
import { Box, Stack, Typography , Paper, Container, Link} from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
// <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />

const Footer = () => (
  <Paper 
    sx={{marginTop: 'calc(10% + 60px)',
    bottom: 0,
    width: '100%'}} 
    component="footer" 
    square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          
          <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
          
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
);

export default Footer;