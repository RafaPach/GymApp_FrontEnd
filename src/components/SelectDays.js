import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

function SelectDays({ searchedExercises }) {
  const x = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const initialContact = [
    {
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
    },
  ];
  const [dayChosen, setDayChosen] = useState(initialContact);
  const [dayChosen2, setDayChosen2] = useState('');

  function test() {
    if (dayChosen2 === 'Monday') {
      setDayChosen([{ ...dayChosen, Monday: `${searchedExercises}` }]);
      console.log(dayChosen);
    }
  }

  // const selected = [...MenuItem].filter((x) => x.selected).map((x) => x.value);
  // console.log(selected);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dayChosen2}
          label="Age"
          onChange={(event) => {
            setDayChosen2(event.target.value);
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
        onClick={test}
      >
        Add To List
      </Button>
    </div>
  );
}

export default SelectDays;
