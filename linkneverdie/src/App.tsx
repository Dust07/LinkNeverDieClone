import React from 'react';
import './main.scss';
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import Games from './containers/Games/Games';
import Movies from './containers/Movies/Movies';
import Forum from './containers/Forum/Forum';
import Footer from './containers/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Games />
      <Movies />
      <Forum />
      <Footer />
    </div>
  );
}

export default App;
