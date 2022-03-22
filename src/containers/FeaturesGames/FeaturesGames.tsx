import "./style.scss"
import "./responsive.scss"
import { featuredGames } from "../../mockData/mockdata"
import FeaturesOptions from "../../components/FeaturesOptions/FeaturesOptions";

function FeaturesGames() {
  return (
    <div className="container features-games-wrapper">
      <FeaturesOptions />

      <div className="feature-item-list-wrapper">
        {featuredGames.map((game, index) => {
          const { name, category, image, description } = game;
          return (
            <div key={index} className="featured-item">
              <img src={require(`../../assets/game_img/${image}`)} alt={name} />
              <h3>{name}</h3>
              <p className="featured-item-category">{category.join(", ")}</p>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturesGames