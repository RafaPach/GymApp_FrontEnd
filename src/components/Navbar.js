import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Stack direction="row" gap="40px" fontSize="26px" margin="32px" px="20px">
      <Link
        to="/"
        style={{
          color: '#3A1212',
          borderBottom: '2px solid #FF2625',
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
          borderBottom: '2px solid #FF2625',
        }}
      >
        Exercises
      </Link>
    </Stack>
  );
};

export default Navbar;
