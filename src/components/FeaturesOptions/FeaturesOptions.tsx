import "./style.scss"
import "./responsive.scss"
import { featuresOptions } from "../../mockData/mockdata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featuresOptionInterface, OptionsInterface } from "../../interfaces/landingPageInterface"

interface Props {
  category: string
}

function FeaturesOptions({ category }: Props) {
  return (
    <div className="features-options-wrapper">
      <ul>
        {featuresOptions.map((currentCategory: featuresOptionInterface) => {
          if (currentCategory.category === category) {
            return currentCategory.options.map((option: OptionsInterface, index: number) => {
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
            })
          }
          else return;
        })}
      </ul>
    </div>

  )
}

export default FeaturesOptions
