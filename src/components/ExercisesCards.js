import React, { useContext, useState } from 'react';
import {
  Card,
  Typography,
  Grid,
  Stack,
  CardContent,
  CardActionArea,
  Pagination,
  Box,
} from '@mui/material';
import { ContextUser } from '../App';
import SelectedDays from '../components/SelectDays';

const ExercisesCards = () => {
  const { searchedExercises, show } = useContext(ContextUser);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = searchedExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);
    console.log(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Grid container spacing={4}>
      {show && searchedExercises.length > 0 ? (
        currentExercises.map((item) => (
          <Grid item key={item.name} xs={12} md={6} lg={4}>
            <Card elevation={3}>
              <CardActionArea>
                {/* MAKE THIS CARD ACTION ONLY BELLOW THE DROPDOWN SO THERE ARE NO WARINING */}
                <CardContent>
                  <SelectedDays lift={item.name} />
                  <img
                    src={item.gif}
                    alt={item.name}
                    style={{ height: '300px' }}
                  ></img>
                  <Stack direction="row" textAlign="center" gap="30px">
                    <Typography
                      sx={{
                        // ml: '20px',
                        color: '#fff',
                        background: '#FF934F',
                        fontSize: '15px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        width: '85px',
                        height: '25px',
                        p: '4px 8px 4px 8px',
                      }}
                    >
                      {item.bodypart}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#fff',
                        background: '#FF934F',
                        fontSize: '15px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        width: '85px',
                        height: '25px',
                        p: '4px 8px 4px 8px',
                      }}
                    >
                      {item.target}
                    </Typography>
                  </Stack>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="black"
                    fontWeight="600"
                    sx={{ fontSize: { lg: '18px', xs: '18px' } }}
                    mt="20px"
                    pb="10px"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <Box
          sx={{ mt: 25, fontSize: '25px' }}
          display="flex"
          width={1486}
          height={80}
          alignItems="center"
          justifyContent="center"
        >
          Please Search For Exercises in Home Page Or Select an Existing Muscle
          Group.
        </Box>
      )}
      <Stack mt="100px" mb="20px" alignItems="center" sx={{ width: 1500 }}>
        {searchedExercises.length > 9 && (
          <Pagination
            variant="outlined"
            shape="rounded"
            count={Math.ceil(searchedExercises.length / 9)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Grid>
  );
};

export default ExercisesCards;
