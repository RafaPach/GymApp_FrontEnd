import React from 'react';
import { Box, Typography, Stack, Hidden } from '@mui/material';

const HeroBanner = () => (
  <Box position="relative" p="20px" direction="row">
    <Stack sx={{ gap: { lg: '300px', md: '165px' } }} direction="row">
      <Stack>
        <Hidden smUp>
          <img
            src="https://thumbs.dreamstime.com/b/cartoon-gym-interior-fitness-equipment-city-training-club-empty-sport-room-bench-press-treadmill-dumbbells-vector-231557268.jpg"
            alt="hero-banner"
            className="sec-hero-banner-img"
          />
        </Hidden>
        <Typography
          color="#FF934F"
          fontWeight="600"
          sx={{ fontSize: { lg: '44px', md: '36px', xs: '30px' } }}
          mt="30px"
        >
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: '36px', md: '34px', xs: '30px' } }}
          mb="23px"
          mt="30px"
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography
          sx={{ fontSize: { lg: '22px', md: '20px', xs: '19px' } }}
          fontFamily="Alegreya"
          lineHeight="35px"
        >
          Check out the most effective exercises personalized to you
        </Typography>
      </Stack>
      <Hidden smDown>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/283/022/original/gym-fitness-concept-in-flat-cartoon-design-men-are-running-on-treadmill-or-boxing-in-sports-club-healthy-lifestyle-and-workout-training-in-gym-illustration-with-people-scene-background-vector.jpg"
          alt="hero-banner"
          className="hero-banner-img"
        />
      </Hidden>
    </Stack>
  </Box>
);

export default HeroBanner;
