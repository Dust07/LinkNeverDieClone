import { useState } from 'react'
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faMagnifyingGlass,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { navBar } from "../../mockData/mockdata"

function Navigation() {
    const [showNavBar, setShowNavBar] = useState(false);

    return (
        <div className="nav-wrapper">
            <div className="dropDownBtn-wrapper">
                <FontAwesomeIcon icon={faBars} className="dropDownBtn" onClick={() => { setShowNavBar(!showNavBar) }} />
            </div>

            <div className="searchBtn-wrapper">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchBtn" />
            </div>

            <div className={`navbar-wrapper ${showNavBar && "show"}`}>
                <ul>
                    {navBar.map((item, index) => {
                        return (
                            <li key={index}>
                                <h3>
                                    {item.context}
                                </h3>
                                {item.submenu || item.gameCategory ?
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    : ""}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navigation