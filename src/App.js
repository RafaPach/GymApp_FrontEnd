import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import WeeklyPlan from './pages/WeeklyPlan';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { createContext, useState } from 'react';
export const ContextUser = createContext('');

function App() {
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [show, setShow] = useState(false);
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
      setShow(true);
    }
  }

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <ContextUser.Provider
        value={{ searchedExercises, setInput, input, GetExercises, show }}
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
