import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    return (
        <div className="nav-wrapper">
            <div className="dropDownBtn-wrapper">
                <FontAwesomeIcon icon={faBars} className="dropDownBtn" />
            </div>

            <div className="searchBtn-wrapper">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchBtn" />
            </div>
        </div>
    )
}

export default Navigation