import React from 'react';
import Highbar from '../components/Highbar/Highbar';
import Topmenu from '../components/Topmenu/Topmenu';
import Navbar from '../components/Navbar/Navbar';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import Footer from '../components/Footer/Footer';
import KantoPokemon from '../components/KantoPokemon/KantoPokemon';

const Kanto = () => {
  return (
    <div>
      <Highbar />
      <Topmenu />
      <Navbar />
      <Sidemenu />
      <KantoPokemon />
      <Footer />
    </div>
  );
}

export default Kanto;