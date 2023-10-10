import React from 'react';
import truckTravel from '../../assets/truck-travel.svg';

export default function Highbar () {
  return (
    <div>
      <div className='flex flex-row bg-[#BDCDD6] items-center justify-center gap-2 p-4'>
        <img className="w-8 h-6" src={truckTravel} alt="" />
        <p className='text-center md:text-left'>
          Buying a Bug-type <strong>Pokémon</strong> you get <strong>Free Delivery</strong>!
        </p>
      </div>
    </div>
  );
};

