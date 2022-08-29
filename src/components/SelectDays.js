import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
  Alert,
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
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleClose() {
    setOpen(!open);
  }

  async function Post() {
    const tmpArray = [];
    try {
      if (dayChosen2) {
        tmpArray.push(...tmpArray, {
          day: `${dayChosen2}`,
          exercise: `${lift}`,
        });
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
        setSuccess(true);
        setOpen(true);
      } else {
        // alert('Please Select A Day');
        setSuccess(false);
        setOpen(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <FormControl sx={{ m: 1, width: { lg: 290, sm: 230, xs: 200 } }}>
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
      <Dialog open={open} onClose={handleClose}>
        {success ? (
          <Alert onClose={handleClose}>Your exercise has been submitted!</Alert>
        ) : (
          <Alert severity="error" onClose={handleClose}>
            Please Select a Day!
          </Alert>
        )}
      </Dialog>
    </div>
  );
}

export default SelectDays;
