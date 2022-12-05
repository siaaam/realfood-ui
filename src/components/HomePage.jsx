import React from 'react';
import FeaturedCategories from './FeaturedCategories';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import LatestRecipies from './LatestRecipies';
import MostLikedRecipies from './MostLikedRecipies';
import RacipiesByCommunity from './RacipiesByCommunity';
import RandomRecipies from './RandomRecipies';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <LatestRecipies />
      <FeaturedCategories />
      <RandomRecipies />
      <MostLikedRecipies />
      <RacipiesByCommunity />
      <Footer />
    </>
  );
};

export default HomePage;
