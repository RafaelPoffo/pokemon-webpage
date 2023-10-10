import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';

export default function Hero() {
  return (
    <div className='bg-gray-200 rounded items-center md:ml-96 md:mr-64 mt-4 md:mt-4'>

        <div className='flex justify-center md:mt-2 mt-24 gap-24 md-gap-4 md:flex-row flex-col'>
            <PokemonCard pokemonName='bulbasaur' />
            <PokemonCard pokemonName='ivysaur' />
            <PokemonCard pokemonName='venusaur' />
        </div>


    <div className='flex justify-center md:mt-8 mt-24 gap-24 md-gap-4 md:flex-row flex-col'>
          <PokemonCard pokemonName='charmander' />
          <PokemonCard pokemonName='charmeleon' />
          <PokemonCard pokemonName='charizard' />
    </div> 
    
    <div className='flex justify-center md:mt-9 mt-24 gap-24 md-gap-4 md:flex-row flex-col'>
          <PokemonCard pokemonName='squirtle' />
          <PokemonCard pokemonName='wartortle' />
          <PokemonCard pokemonName='blastoise' />
      </div>
    </div>
  );
}