import React from 'react';
import KantoPokemonCard from './KantoPokemonCard.jsx'


export default function KantoPokemon() {
  return (
    <div>
      <div className='bg-gray-200 rounded items-center md:ml-96 md:mr-64 mt-4 md:mt-4'>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <KantoPokemonCard pokemonName='rattata' />
        <KantoPokemonCard pokemonName='raticate' />
        <KantoPokemonCard pokemonName='metapod' />
        <KantoPokemonCard pokemonName='butterfree' />
        </div>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <KantoPokemonCard pokemonName='magikarp' />
        <KantoPokemonCard pokemonName='pidgey' />
        <KantoPokemonCard pokemonName='pidgeotto' />
        <KantoPokemonCard pokemonName='horsea' />
        </div>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <KantoPokemonCard pokemonName='ekans' />
        <KantoPokemonCard pokemonName='oddish' />
        <KantoPokemonCard pokemonName='gloom' />
        <KantoPokemonCard pokemonName='vileplume' />
        </div>

        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <KantoPokemonCard pokemonName='zubat' />
        <KantoPokemonCard pokemonName='psyduck' />
        <KantoPokemonCard pokemonName='primeape' />
        <KantoPokemonCard pokemonName='growlithe' />
        </div>

        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <KantoPokemonCard pokemonName='alakazam' />
        <KantoPokemonCard pokemonName='dratini' />
        <KantoPokemonCard pokemonName='haunter' />
        <KantoPokemonCard pokemonName='gengar' />
        </div>


        </div>
    </div>
    
  );
}