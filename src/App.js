import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { createContext, useState } from 'react';
import { options, fetchData } from '../src/assets/fetchdata.js';
export const ContextUser = createContext('');

function App() {
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [input, setInput] = useState('');

  async function GetExercises() {
    if (input) {
      const response = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        options
      );
      const searchedExercises = response.filter(
        (item) =>
          item.name.toLowerCase().includes(input) ||
          item.target.toLowerCase().includes(input) ||
          item.equipment.toLowerCase().includes(input) ||
          item.bodyPart.toLowerCase().includes(input)
      );
      setSearchedExercises(searchedExercises);
    }
    console.log(searchedExercises);
  }

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <ContextUser.Provider
        value={{ searchedExercises, setInput, input, GetExercises }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </ContextUser.Provider>
    </Box>
  );
}

export default App;
