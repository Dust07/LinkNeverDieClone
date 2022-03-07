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
                <button>
                    <FontAwesomeIcon icon={faBars} className="dropDownBtn" />
                </button>
            </div>

            <div className="searchBtn-wrapper">
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchBtn" />
                </button>
            </div>
        </div>
    )
}

export default Navigation