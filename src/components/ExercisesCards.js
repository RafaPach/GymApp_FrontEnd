import React, { useContext, useState } from 'react';
import {
  Card,
  Typography,
  Grid,
  Stack,
  CardContent,
  CardActionArea,
  Pagination,
} from '@mui/material';
import { ContextUser } from '../App';
import SelectedDays from '../components/SelectDays';
// these cards will have: image in the center, exercise name below and muscle targets and add button, when clicked dropdown with the days of the week

const ExercisesCards = () => {
  const { searchedExercises } = useContext(ContextUser);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = searchedExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const [lift, setLift] = useState([]);
  // const initialContact = {
  //   Monday: '',
  //   Tuesday: '',
  //   Wednesday: '',
  //   Thursday: '',
  //   Friday: '',
  // };
  const initialContact = [];

  const [test, setTest] = useState([]);

  return (
    <Grid container spacing={4}>
      {currentExercises.map((item) => (
        <Grid item key={item.name} xs={12} md={6} lg={4}>
          <Card elevation={3}>
            <CardActionArea
              onClick={() => {
                // const x = [...lift];
                // setLift([...x, item.name]);
                setLift([item.name]);
                // console.log(lift);
              }}
            >
              {/* MAKE THIS CARD ACTION ONLY BELLOW THE DROPDOWN SO THERE ARE NO WARINING */}
              <CardContent>
                <SelectedDays
                  searchedExercises={lift}
                  test={test}
                  setTest={setTest}
                />
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
                  sx={{ fontSize: { lg: '20px', xs: '18px' } }}
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
      ))}
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
