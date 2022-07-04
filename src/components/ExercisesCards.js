import React, { useContext } from 'react';
import {
  Card,
  Typography,
  Grid,
  Stack,
  Button,
  CardContent,
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
            {/* <CardActionArea onClick={() => console.log('dw')}> */}
            <CardContent>
              <SelectedDays />
              <img
                src={item.gifUrl}
                alt={item.name}
                style={{ height: '300px' }}
              ></img>
              <Stack direction="row" textAlign="center">
                <Button
                  sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#FF934F',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                  }}
                >
                  {item.bodyPart}
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
                </Button>
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
            {/* </CardActionArea> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExercisesCards;
