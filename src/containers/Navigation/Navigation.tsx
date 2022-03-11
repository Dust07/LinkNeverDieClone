import { useState } from 'react'
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faMagnifyingGlass,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { navBar } from "../../mockData/mockdata"
import Submenu from './Submenu/Submenu'

function Navigation() {
    const [showNavBar, setShowNavBar] = useState(false);
    // const [showSubBar, setShowSubBar] = useState(false);

    const handleClickCategory = () => {

    }

    return (
        <div className="nav-wrapper">
            <div className="dropDownBtn-wrapper">
                <FontAwesomeIcon icon={faBars} className="dropDownBtn" onClick={() => { setShowNavBar(!showNavBar) }} />
            </div>

            <div className="searchBtn-wrapper">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchBtn" />
            </div>

            <div className={`navbar-wrapper ${showNavBar && "show-nav-dropdown"}`}>
                <ul>
                    {navBar.map((item, index) => {
                        return (
                            <li key={index} onClick={handleClickCategory}>
                                <div className="top-level-category">
                                    <h3>{item.context}</h3>
                                    {item.submenu || item.gameCategory ?
                                        <FontAwesomeIcon icon={faChevronDown} />
                                        : ""}
                                </div>
                                {/* {<div className={`submenu-category ${showSubBar && "show"}`}>
                                    <Submenu submenu={item.submenu} gameCategory={item.gameCategory} />
                                </div>} */}

                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navigation