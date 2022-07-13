import React, { useContext } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
// import BodyPartsList from './BodyPartsList';
import { ContextUser } from '../App';
import { useNavigate } from 'react-router-dom';

const SearchExercises = () => {
  // const [bodyParts, setBodyParts] = useState([]);
  const { GetExercises, input, setInput } = useContext(ContextUser);
  let navigate = useNavigate();

  // useEffect(() => {
  //   async function RollData() {
  //     const bodyparts = await fetchData(
  //       'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  //       options
  //     );
  //     setBodyParts(bodyparts);
  //   }
  //   RollData();
  // }, []);

  return (
    <Stack mt="300px" alignItems="center" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises <br />
        You should know
      </Typography>
      <Box mb="70px">
        <TextField
          height="70px"
          sx={{
            input: { fontWeight: '600', border: 'none', borderRadius: '4px ' },
            width: { lg: '1100px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toLowerCase());
          }}
          type="text"
          placeholder="Search Exercises"
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: '#FF934F',
            color: '#fff',
            width: { lg: '175px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: { lg: '180px', xs: '150px' },
            fontSize: { lg: '16px', xs: '14px' },
          }}
          onClick={() => {
            GetExercises();
            navigate('/exercises', { replace: true });
          }}
        >
          Search
        </Button>
      </Box>
      <Box>{/* <BodyPartsList data={bodyParts} /> */}</Box>
    </Stack>
  );
};

export default SearchExercises;
