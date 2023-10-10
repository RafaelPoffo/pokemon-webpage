import React, { useState, useEffect } from 'react';
import arrowDown from '../../assets/arrowDown.svg';

export default function Sidemenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`ml-40 rounded-lg flex flex-col gap-2 w-48 ${
        isMobile ? 'absolute top-[365px]' : 'relative'
      }`}
    >
      {/* Se for um dispositivo móvel, renderize o menu como um select */}
      {isMobile ? (
        <div>
          <select
            className='w-full p-2 border rounded'
            onChange={(e) => {
              console.log(e.target.value); // Lógica para lidar com a seleção aqui
            }}
          >
            <option value='Normal'>Normal</option>
            <option value='Fire'>Fire</option>
            <option value='Water'>Water</option>
            <option value='Grass'>Grass</option>
            <option value='Flying'>Flying</option>
            <option value='Poison'>Poison</option>
            <option value='Electric'>Electric</option>
            <option value='Ground'>Ground</option>
            <option value='Rock'>Rock</option>
            <option value='Psychic'>Psychic</option>
            <option value='Ice'>Ice</option>
            <option value='Bug'>Bug</option>
            <option value='Ghost'>Ghost</option>
            <option value='Steel'>Steel</option>
            <option value='Dragon'>Dragon</option>
            <option value='Dark'>Dark</option>
            <option value='Fairy'>Fairy</option>


            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
      ) : (
        /* Se não for um dispositivo móvel, renderize o menu original */
        <div
          className={`flex ml-4 w-48 text-xl gap-8 mt-4 mr-4 items-center flex-row justify-center cursor-pointer rounded bg-[#62748a] text-white ${
            isMenuVisible ? 'cursor-pointer' : ''
          }`}
          onClick={handleMenuToggle}
        >
          <h2 className='ml-2 flex items-center mt-1 mb-1'>Sort by type</h2>
          <img
            className={`h-4 w-4 ${isMenuVisible ? 'rotate-180' : ''}`}
            src={arrowDown}
            alt=''
          />
        </div>
      )}

      {/* Renderize o menu original apenas em dispositivos não móveis */}
      {!isMobile && isMenuVisible && (
        <div className='absolute bg-gray-200 rounded-xl mt-16 top-0 ml-4 flex flex-col gap-1 p-6'>
          <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>
            Normal
          </ul>
              <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Fire</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Water</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Grass</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Flying</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Poison</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Electric</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Ground</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Rock</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Psychic</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Ice</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Bug</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Ghost</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Steel</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Dragon</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Dark</ul>
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
            <ul className='ml-4 cursor-pointer hover:underline transition duration-300 transform hover:scale-105'>Fairy</ul>  
                <ul> <hr className='my-1 border-[#c9c9c9] w-36' /> </ul>
          </div>
      )}
    </div>
  )
}