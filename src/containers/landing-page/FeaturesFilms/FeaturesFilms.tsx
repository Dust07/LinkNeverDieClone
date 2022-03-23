import "./style.scss"
import "./responsive.scss"
import FeaturesOptions from '../../../components/FeaturesOptions/FeaturesOptions'
import { featuredFilms } from "../../../mockData/mockdata"
import { filmsInterface } from "../../../interfaces/landingPageInterface"

function FeaturesFilms() {
  return (
    <div className="container featured-films-wrapper">
      <FeaturesOptions />
      <div className="featured-films-list-wrapper">
        {featuredFilms.map((film: filmsInterface, index: number) => {
          const { image, name, vietSubName } = film;
          return (
            <div key={index} className="featured-film-info" >
              <img src={require(`../../../assets/film_img/${image}`)} alt={name} className="featured-film-image" />
              <h1 className="featured-film-title">{name}</h1>
              <h3 className="featured-film-vietsub">{vietSubName}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturesFilms