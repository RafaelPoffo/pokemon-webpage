import React from 'react';
import JohtoPokemonCard from './JohtoPokemonCard.jsx'


export default function JohtoPokemon() {
  return (
    <div>
      <div className='bg-gray-200 rounded items-center md:ml-96 md:mr-64 mt-4 md:mt-4'>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <JohtoPokemonCard pokemonName='chikorita' />
        <JohtoPokemonCard pokemonName='cyndaquil' />
        <JohtoPokemonCard pokemonName='totodile' />
        <JohtoPokemonCard pokemonName='spinarak' />
        </div>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <JohtoPokemonCard pokemonName='natu' />
        <JohtoPokemonCard pokemonName='xatu' />
        <JohtoPokemonCard pokemonName='flaaffy' />
        <JohtoPokemonCard pokemonName='espeon' />
        </div>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <JohtoPokemonCard pokemonName='marill' />
        <JohtoPokemonCard pokemonName='azumarill' />
        <JohtoPokemonCard pokemonName='quagsire' />
        <JohtoPokemonCard pokemonName='murkrow' />
        </div>
        <div className='flex justify-center md:mt-2 mt-24 gap-10 md-gap-4 md:flex-row flex-col'>
        <JohtoPokemonCard pokemonName='misdreavus' />
        <JohtoPokemonCard pokemonName='heracross' />
        <JohtoPokemonCard pokemonName='houndour' />
        <JohtoPokemonCard pokemonName='houndoom' />
        </div>

        </div>
    </div>
    
  );
}