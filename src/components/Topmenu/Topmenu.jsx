import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pokemonLogo from '../../assets/pokemonLogo.jpg';
import glassSearch from '../../assets/glassSearch.svg';
import userArt from '../../assets/userArt.svg';
import bagArt from '../../assets/bagArt.svg';

export default function Topmenu() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='w-full h-48 flex flex-col md:flex-row items-center justify-center gap-8 mt-4 '>
      <Link to="/">
        <img className="h-24 w-26 mt-14 md:mt-0 md:h-34 md:w-36" src={pokemonLogo} alt="pkm logo" />
      </Link>
      <div className='flex justify-center items-center gap-2 border'>
        <input
          type="text"
          className='px-2 py-4 w-64 md:w-96 bg-gray-100 rounded focus:placeholder-transparent'
          placeholder="Search a Pokémon!"
          value={searchText}
          onChange={handleSearchChange}
        />
        <img src={glassSearch} alt="search icon" className="sticky mr-2 left-0 w-6 h-6 cursor-pointer" />
      </div>

      <div className='flex gap-8 md:flex-row'>
        <div className='flex items-center flex-row gap-1'>
          <img className='cursor-pointer h-8 w-8' src={userArt} alt="" />
          <p className='cursor-pointer md:flex hidden transition duration-300 transform hover:scale-105'> Login or Sign In</p>
        </div>
        |
        <div className='cursor-pointer flex h-8 w-8 items-center flex-row gap-1' >
          <img src={bagArt} alt="" />
          <p className='cursor-pointer md:flex hidden transition duration-300 transform hover:scale-105'> Bag </p>
        </div>
      </div>
    </div>
  );
}






