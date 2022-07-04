import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/exercises');
  }
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
    </Box>
  );
};

export default Home;
