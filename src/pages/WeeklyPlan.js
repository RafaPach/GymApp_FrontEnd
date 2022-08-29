import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 400 },
  { field: 'day', headerName: 'Day', width: 310 },
  { field: 'exercise', headerName: 'Exercise', width: 426 },
];

export default function WeeklyPlan() {
  const [weekdata, setWeekData] = useState('');
  const [show, setShow] = useState(false);
  const [testy, setTesty] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('http://localhost:5000/data/plan');
      let data = await response.json();
      setShow(true);
      setWeekData(data.data);
    };
    fetchData();
  }, [weekdata]);

  async function DeleteData(id) {
    try {
      const data = await fetch(`http://localhost:5000/data/plan/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  function CustomNoRowsOverlay() {
    return (
      <Box
        sx={{ mt: 25, fontSize: '25px' }}
        display="flex"
        width={1486}
        height={80}
        alignItems="center"
        justifyContent="center"
      >
        Please Select Exercises
      </Box>
    );
  }
  return (
    <Box
      sx={{
        // height: { lg: 600, md: 400, sm: 300, xs: 600 },
        height: 670,
        width: { lg: '1210px', md: '900px', sm: '700px', xs: '400px' },
        wordWrap: 'break-word',
        ml: { lg: '100px' },
        mt: { lg: '40px' },
      }}
    >
      {show && (
        <DataGrid
          components={{
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          rows={weekdata}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          onCellClick={(e) => {
            setTesty(e.id);
          }}
          fontSize="100px"
        />
      )}
      <Box
        display="flex"
        sx={{ width: { lg: 1486 } }}
        height={80}
        alignItems="center"
        justifyContent="center"
        gap="60px"
      >
        <Button
          onClick={() => {
            DeleteData(testy);
          }}
          sx={{
            bgcolor: '#FF934F',
            color: '#fff',
            width: { lg: '175px', xs: '80px' },
            height: '56px',
            fontSize: { lg: '16px', xs: '14px' },
          }}
        >
          DELETE
        </Button>
      </Box>
    </Box>
  );
}
