import React from 'react';
import Highbar from '../components/Highbar/Highbar';
import Topmenu from '../components/Topmenu/Topmenu';
import Navbar from '../components/Navbar/Navbar';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import Footer from '../components/Footer/Footer';
import JohtoPokemon from '../components/JohtoPokemon/JohtoPokemon';

const Johto = () => {
  return (
    <div>
      <Highbar />
      <Topmenu />
      <Navbar />
      <Sidemenu />
      <JohtoPokemon />
      <Footer />
    </div>
  );
}

export default Johto;