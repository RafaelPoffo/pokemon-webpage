import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonCard({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);

  // Objeto que mapeia nomes de Pokémon a preços e informações de evolução
  const pokemonInfo = {
    bulbasaur: {
      price: 50,
      evolutionLevel: '10',
    },
    charmander: {
      price: 50,
      evolutionLevel: '10',
    },
    squirtle: {
      price: 50,
      evolutionLevel: '10',
    },
    ivysaur: {
      price: 150,
      evolutionLevel: '22',
    },
    charmeleon: {
      price: 150,
      evolutionLevel: '22',
    },
    wartortle: {
      price: 150,
      evolutionLevel: '22',
    },
    charizard: {
      price: 500,
      evolutionLevel: '36',
    },
    venusaur: {
      price: 500,
      evolutionLevel: '36',
    },
    blastoise: {
      price: 500,
      evolutionLevel: '36',
    },
  };

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do Pokémon', error);
      }
    }

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div className='flex justify-center'>
      {pokemonData && (
        <div className='mt-4 ml-4 mb-4 bg-white rounded-lg flex flex-col p-4 items-center w-64 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105'>
          <img
            className='w-48 h-48 rounded-full'
            src={pokemonData.sprites.front_default}
            alt={pokemonName}
          />
          <h2 className='text-2xl font-semibold mt-2'>{pokemonName}</h2>
          <h3 className='text-gray-600 text-sm'>Level: {pokemonInfo[pokemonName.toLowerCase()].evolutionLevel}</h3>
          <p className='text-black-500 font-semibold text-md mt-2'>
            Type: {pokemonData.types[0].type.name}
            {pokemonData.types.length > 1 && (
              <span>, {pokemonData.types[1].type.name}</span>
            )}
          </p>
          <h4 className='text-purple-500 font-semibold text-lg mt-2'>$ {pokemonInfo[pokemonName.toLowerCase()].price}</h4>
          <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-2 cursor-pointer hover:bg-blue-600'>
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}