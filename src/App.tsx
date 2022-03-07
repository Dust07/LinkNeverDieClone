import React from 'react';
import './main.scss';
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import Features from './containers/Features/Features';
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
      <Features />
      <Features />
      <Forum />
      <Footer />
    </div>
  );
}

export default App;
