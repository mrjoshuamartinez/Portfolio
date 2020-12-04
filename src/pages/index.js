import React, { useState } from 'react'
import Footer from '../components/footer';
import HeroSection from '../components/herosection';
import InfoSection from '../components/infosection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infosection/data';
import Languages from '../components/languages';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import Sidebar from '../components/sidebar';

const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={ isOpen } toggle={ toggle } />
      <Navbar toggle={ toggle }/>
      <HeroSection />
      <InfoSection { ...homeObjOne } />
      <Projects />
      <InfoSection { ...homeObjTwo } />
      <InfoSection { ...homeObjThree } />
      <Languages />
      <Footer />
    </>
  )
}

export default Home