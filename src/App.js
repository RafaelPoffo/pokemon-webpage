import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe "Routes" em vez de "Switch"
import axios from 'axios';
import Home from './pages/Home';
import Kanto from './pages/Kanto';
import Johto from './pages/Johto';

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/');
        setPokemonData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes> {/* Substitua o "Switch" por "Routes" */}
        <Route path="/" element={<Home />} /> {/* Use "element" em vez de "component" */}
        <Route path="/kanto" element={<Kanto />} /> {/* Use "element" em vez de "component" */}
        <Route path="/johto" element={<Johto />} /> {/* Use "element" em vez de "component" */}
      </Routes> {/* Substitua o "Switch" por "Routes" */}
    </Router>
  );
}

export default App;