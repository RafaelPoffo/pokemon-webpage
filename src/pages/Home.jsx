import React from 'react';
import Highbar from '../components/Highbar/Highbar';
import Topmenu from '../components/Topmenu/Topmenu';
import Navbar from '../components/Navbar/Navbar';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Kanto from './Kanto';

const Home = () => {
  return (
    <div>
      <Highbar />
      <Topmenu />
      <Navbar />
      <Sidemenu />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;