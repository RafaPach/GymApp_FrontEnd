import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box
      sx={{
        mt: { lg: '97px', md: '65px', sm: '60px', xs: '20px' },
        ml: { sm: '50px' },
      }}
    >
      <HeroBanner />
      <SearchExercises />
    </Box>
  );
};

export default Home;
