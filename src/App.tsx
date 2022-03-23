import React from 'react';
import './main.scss';
import Header from './containers/landing-page/Header/Header';
import Hero from './containers/landing-page/Hero/Hero';
import FeaturesGames from './containers/landing-page/FeaturesGames/FeaturesGames';
import FeaturesFilms from './containers/landing-page/FeaturesFilms/FeaturesFilms';
import Forum from './containers/landing-page/Forum/Forum';
import Footer from './containers/landing-page/Footer/Footer';
import Navigation from './containers/landing-page/Navigation/Navigation';
import Search from './containers/landing-page/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Search />
      <FeaturesGames />
      <FeaturesFilms />
      <Forum />
      <Footer />
    </div>
  );
}

export default App;
