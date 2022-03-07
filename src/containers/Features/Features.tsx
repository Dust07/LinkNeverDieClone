import React from 'react'
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featuredGames, featuresOption } from "../../mockData/mockdata"

function Features() {
    return (
        <div className="features-wrapper">
            <ul>
                {featuresOption.map((option, index) => {
                    return (
                        <li key={index}>
                            <div className="feature-icon-wrapper">
                                <FontAwesomeIcon icon={option.iconURL} />
                            </div>
                            <div className="feature-text-wrapper">
                                <p>{option.name}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <div className="feature-item-list">
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

export default Features