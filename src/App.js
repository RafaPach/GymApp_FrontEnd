import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import WeeklyPlan from './pages/WeeklyPlan';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
export const ContextUser = createContext('');

function App() {
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [input, setInput] = useState('');

  async function GetExercises() {
    if (input) {
      const response = await fetch('http://localhost:5000/data');
      const data = await response.json();
      const searchedExercises = data.filter(
        (item) =>
          item.target.toLowerCase().includes(input) ||
          item.name.toLowerCase().includes(input) ||
          item.equipment.toLowerCase().includes(input) ||
          item.bodypart.toLowerCase().includes(input)
      );
      setSearchedExercises(searchedExercises);
    }
  }
  const alanKey =
    'd6f408e565a4aec4d11e746885994fcf2e956eca572e1d8b807a3e2338fdd0dc/stage';

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, payload }) => {
        if (command === 'testCommand') {
          console.log(payload);
        }
      },
    });
  }, []);

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <ContextUser.Provider
        value={{ searchedExercises, setInput, input, GetExercises }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/weeklyplan" element={<WeeklyPlan />} />
        </Routes>
      </ContextUser.Provider>
    </Box>
  );
}

export default App;
