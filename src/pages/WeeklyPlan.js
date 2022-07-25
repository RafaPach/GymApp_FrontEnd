import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 500 },
  { field: 'day', headerName: 'Day', width: 410 },
  { field: 'exercise', headerName: 'Exercise', width: 526 },
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
    <div
      style={{
        height: 600,
        width: '100%',
        wordWrap: 'break-word',
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
            console.log(e.id);
          }}
          fontSize="100px"
        />
      )}
      <Box
        display="flex"
        width={1486}
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
    </div>
  );
}
