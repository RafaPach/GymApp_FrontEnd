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
    <Box justifyContent="center" alignItems="center" display="flex">
      <Stack
        p="20px"
        sx={{ mt: { lg: '80px', xs: '60px' }, ml: { xs: '50px' } }}
      >
        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: '44px', xs: '30px' } }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises <br />
          You should know
        </Typography>
        <Stack
          direction="row"
          mb="70px"
          sx={{ gap: { lg: '100px', md: '50px', xs: '30px' } }}
        >
          <TextField
            height="70px"
            sx={{
              input: { fontWeight: '600', border: 'none', borderRadius: '4px' },
              width: { lg: '950px', md: '600px', sm: '450px', xs: '240px' },
              backgroundColor: '#fff',
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
              // right: { lg: '120px', xs: '20px' },
              fontSize: { lg: '16px', xs: '14px' },
            }}
            onClick={() => {
              GetExercises();
              setInput('');
              navigate('/exercises', { replace: true });
            }}
          >
            Search
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
