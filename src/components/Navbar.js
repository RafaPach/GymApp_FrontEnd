import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      // backgroundColor="red"
      position="relative"
    >
      <Stack
        direction="row"
        // gap="40px"
        fontSize="26px"
        margin="32px"
        px="20px"
        sx={{
          fontSize: { lg: '26px', md: '22px', xs: '18px' },
          gap: { lg: '100px', md: '30px', xs: '20px' },
          ml: { xs: '50px' },
        }}
      >
        <Link
          to="/"
          style={{
            color: '#3A1212',
            borderBottom: '2px solid #FB5607',
            margin: '0 20px',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        <Link
          to="/exercises"
          style={{
            margin: '0 20px',
            color: '#3A1212',
            textDecoration: 'none',
            borderBottom: '2px solid #FB5607',
          }}
        >
          Exercises
        </Link>
        <Link
          to="/weeklyplan"
          style={{
            margin: '0 20px',
            color: '#3A1212',
            textDecoration: 'none',
            borderBottom: '2px solid #FB5607',
            whiteSpace: 'nowrap',
          }}
        >
          {`Weekly Plan`}
        </Link>
      </Stack>
    </Box>
  );
};

export default Navbar;
