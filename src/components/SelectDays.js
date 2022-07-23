import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import React, { useState } from 'react';

function SelectDays({ test, setTest, lift }) {
  const x = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const [dayChosen2, setDayChosen2] = useState('');

  // function handleClick() {
  //   setTest([
  //     ...test,
  //     { day: `${dayChosen2}`, exercise: `${searchedExercises}` },
  //   ]);
  //   console.log(test[0].day);
  // }
  async function Post() {
    const tmpArray = [];
    try {
      tmpArray.push(...tmpArray, { day: `${dayChosen2}`, exercise: `${lift}` });
      console.log(tmpArray);
      const data = await fetch('http://localhost:5000/data/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          day: tmpArray[0].day,
          exercise: tmpArray[0].exercise,
        }),
      });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
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
        onClick={Post}
      >
        Add To List
      </Button>
    </div>
  );
}

export default SelectDays;
