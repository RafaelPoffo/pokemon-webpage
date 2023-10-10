import React, { useState } from 'react';
import menuArt from '../../assets/menuArt.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuTooggle = () => {
    setTimeout(() => {
      setShowMenu(!showMenu)
    }, 100)
  }

  return (
    <div className='md:bg-[#62748a] text-white mt-24 md:mt-6 text-md rounded'>
      <div className='md:flex flex-row md:gap-8 md:justify-center md:flex-row md:p-6 mr-5 hidden md:text-lg'>
        <ul>
          <li className='cursor-pointer hover:text-yellow-300 hover:underline transition duration-300 transform hover:scale-105'>
            <Link to='/kanto'>Kanto</Link>
          </li>
        </ul>
        <ul>
          <li>|</li>
        </ul>
        <ul>
          <li className='cursor-pointer hover:text-yellow-300 hover:underline transition duration-300 transform hover:scale-105'>
            <Link to='/johto'>Johto</Link>
          </li>
        </ul>
        <ul>
          <li>|</li>
        </ul>
        <ul>
          <li className='cursor-pointer hover:text-yellow-300 hover:underline transition duration-300 transform hover:scale-105'>
            <a href='#'>Hoenn</a>
          </li>
        </ul>
        <ul>
          <li>|</li>
        </ul>
        <ul>
          <li className='cursor-pointer hover:text-yellow-300 hover:underline transition duration-300 transform hover:scale-105'>
            <a href='#'>Sinnoh</a>
          </li>
        </ul>

        
      </div>

      <div className='flex-col'>
        {/* Botão de menu para dispositivos móveis */}
        <div className='md:hidden flex md:p-4 rounded'>
          <button onClick={handleMenuTooggle} className='sticky-bottom bg-transparent border-none ml-4 focus:outline-none'>
            <img src={menuArt} alt="Menu" className={`w-12 h-12 cursor-pointer mt-1 rounded bg-[#4B6584] transform ${showMenu ? '' : ''} transition duration-300 hover:scale-110`} />
          </button>
        </div>

        {/* Menu vertical para dispositivos móveis */}
        {showMenu && (
          
          <div className='md:hidden absolute bg-[#4B6584] p-2 mr-0 ml-4 rounded text-lg w-36'>
            <ul className='cursor-pointer hover:text-yellow-300 ml-2 transition duration-300 transform hover:scale-105'>
              <li><Link to='/kanto'>Kanto</Link></li>
            </ul>
            <ul>
              <hr className='my-2 border-[#E5E0FF]' />
            </ul>
            <ul className='cursor-pointer hover:text-yellow-300 ml-2 transition duration-300 transform hover:scale-105'>
              <li> <Link to='/johto'>Johto</Link></li>
            </ul>
            <ul>
              <hr className='my-2 border-[#E5E0FF]' />
            </ul>
            <ul className='cursor-pointer hover:text-yellow-300 ml-2 transition duration-300 transform hover:scale-105'>
              <li><a href='#'>Hoenn</a></li>
            </ul>
            <ul>
              <hr className='my-2 border-[#E5E0FF]' />
            </ul>
            <ul className='cursor-pointer hover:text-yellow-300 ml-2 transition duration-300 transform hover:scale-105'>
              <li><a href='#'>Sinnoh</a></li>
            </ul>
            
          </div>
        )}
      </div>
    </div>
  );
}
