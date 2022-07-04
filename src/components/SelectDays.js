import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import React, { useState } from 'react';

function SelectDays() {
  const x = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const [dayChosen, setDayChosen] = useState({});

  console.log(dayChosen);
  //   const handleChangeFor = (propertyName) => (event) => {
  //   setContact((contact) => ({
  //     ...contact,
  //     [propertyName]: event.target.value,
  //   }));
  //   // console.log(contact.name);
  // };
   const handleChangeFor = (propertyName) => (event) => {
     setDayChosen((dayChosen) => ({
       ...dayChosen,
       [propertyName]: event.target.value,
     }));
     // console.log(dayChosen.name);
   };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dayChosen}
          label="Age"
          onChange={(e) => {
            setDayChosen({day: e.target.value });
          }}
        >
          {x.map((x) => (
            <MenuItem value={x} key={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          mt: '16px',
          ml: '16px',
          color: '#fff',
          background: '#FF934F',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
        onClick={() => {
          console.log(dayChosen);
        }}
      >
        Add To List
      </Button>
    </div>
  );
}

export default SelectDays;
