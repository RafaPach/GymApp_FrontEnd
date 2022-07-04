import React from 'react';
import {
  Card,
  Typography,
  Grid,
  CardActionArea,
  CardContent,
} from '@mui/material';
import icon from '../assets/gym.png';

const BodyPartsList = ({ data }) => {
  return (
    <Grid container spacing={4}>
      {data.map((item) => (
        <Grid item key={item} xs={12} md={6} lg={4}>
          <Card elevation={3}>
            <CardActionArea onClick={() => console.log('dw')}>
              <CardContent>
                <img src={icon} alt="icon" style={{ height: '35px' }}></img>
                <Typography gutterBottom variant="h5" component="div">
                  {item}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BodyPartsList;
