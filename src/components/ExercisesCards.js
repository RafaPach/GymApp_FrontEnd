import React, { useContext } from 'react';
import {
  Card,
  Typography,
  Grid,
  Stack,
  Button,
  CardContent,
  CardActionArea,
  Box,
} from '@mui/material';
import { ContextUser } from '../App';
import SelectedDays from '../components/SelectDays';

// these cards will have: image in the center, exercise name below and muscle targets and add button, when clicked dropdown with the days of the week

const ExercisesCards = () => {
  const { searchedExercises } = useContext(ContextUser);

  return (
    <Grid container spacing={4}>
      {searchedExercises.map((item) => (
        <Grid item key={item.name} xs={12} md={6} lg={4}>
          <Card elevation={3}>
            <CardActionArea onClick={() => console.log(item.name)}>
              {/* MAKE THIS CARD ACTION ONLY BELLOW THE DROPDOWN SO THERE ARE NO WARINING */}
              <CardContent>
                <SelectedDays searchedExercises={item.name} />
                <img
                  src={item.gif}
                  alt={item.name}
                  style={{ height: '300px' }}
                ></img>
                <Stack direction="row" textAlign="center" gap="30px">
                  {/* <Button
                    sx={{
                      ml: '21px',
                      color: '#fff',
                      background: '#FF934F',
                      fontSize: '14px',
                      borderRadius: '20px',
                      textTransform: 'capitalize',
                    }}
                  >
                    {item.bodypart}
                  </Button>
                  <Button
                    sx={{
                      ml: '31px',
                      color: '#fff',
                      background: '#FF934F',
                      fontSize: '14px',
                      borderRadius: '20px',
                      textTransform: 'capitalize',
                    }}
                  >
                    {item.target}
                  </Button> */}
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
    </Grid>
  );
};

export default ExercisesCards;
