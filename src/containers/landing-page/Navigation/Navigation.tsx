import { useState } from 'react'
import "./style.scss"
import "./responsive.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { navBar } from "../../../mockData/mockdata"
import Category from './Category/Category'



function Navigation() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="dropDownBtn-wrapper">
          <FontAwesomeIcon icon={faBars} className="dropDownBtn" onClick={() => { setShowNavBar(!showNavBar) }} />
        </div>
        <div className={`navbar-wrapper ${showNavBar && "show-nav-dropdown"}`}>
          <ul className="navbar">
            {navBar.map((item, index) => {
              return (
                <Category key={index} item={item} index={index} />
              )
            })}
          </ul>
        </div>
        <div className="searchBtn-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchBtn" />
        </div>
      </div>
    </div>

  )
}

export default Navigation