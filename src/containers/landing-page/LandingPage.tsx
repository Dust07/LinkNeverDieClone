import FeaturesFilms from './FeaturesFilms/FeaturesFilms'
import FeaturesGames from './FeaturesGames/FeaturesGames'
import Forum from './Forum/Forum'
import Hero from './Hero/Hero'
import Search from './Search/Search'

function LandingPage() {

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