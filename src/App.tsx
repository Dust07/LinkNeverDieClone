import React from 'react';
import './main.scss';
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import FeaturesGames from './containers/FeaturesGames/FeaturesGames';
import FeaturesFilms from './containers/FeaturesFilms/FeaturesFilms';
import Forum from './containers/Forum/Forum';
import Footer from './containers/Footer/Footer';
import Navigation from './containers/Navigation/Navigation';
import Search from './containers/Search/Search';

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
