import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import TourDetail from './pages/TourDetail';
import CreateTour from './pages/CreateTour';
import MyTours from './pages/MyTours';
import EditTour from './pages/EditTour';

import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour/:id" element={<TourDetail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateTour />} />
      <Route path="/mytours" element={<MyTours />} />
      <Route path="/edit-tour/:id" element={<EditTour />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;