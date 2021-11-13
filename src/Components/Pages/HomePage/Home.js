import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import HomeProducts from '../HomeProducts/HomeProducts';
import Suggestion from '../Suggestion/Suggestion';
import Revies from '../Review/Review';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <HomeProducts></HomeProducts>
      <Suggestion></Suggestion>
      <Revies></Revies>
      <Footer></Footer>
    </>
  );
}

export default Home;

// Navbar
// herosection
// products
// suggestionlist
// review
// subscription
// footer
