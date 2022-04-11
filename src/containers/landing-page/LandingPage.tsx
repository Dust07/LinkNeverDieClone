import { useEffect } from 'react'
import FeaturesFilms from './FeaturesFilms/FeaturesFilms'
import FeaturesGames from './FeaturesGames/FeaturesGames'
import Forum from './Forum/Forum'
import Hero from './Hero/Hero'
import Search from './Search/Search'

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Hero />
      <Search />
      <FeaturesGames />
      <FeaturesFilms />
      <Forum />
    </>
  )
}

export default LandingPage