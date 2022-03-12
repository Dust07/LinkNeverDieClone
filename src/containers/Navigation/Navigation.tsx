import { useState } from 'react'
import "./style.scss"
import "./responsive.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faMagnifyingGlass,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { navBar } from "../../mockData/mockdata"
import Category from './Category/Category'



function Navigation() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        {/* <div className="navBar-wide-layout">
                    <ul>
                        {navBar.map((item, index) => {
                            return (
                                <li key={index} onClick={handleClickCategory}>
                                    <div className="top-level-category">
                                        <h3>{item.context}</h3>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div> */}

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
                <Category item={item} index={index} />
                // <li key={index} className="navbar-list-item" onClick={handleClickCategory}>
                //   <div className="top-level-category">
                //     <h3>{item.context}</h3>
                //     {item.category ?
                //       <FontAwesomeIcon icon={faChevronDown} />
                //       : ""}
                //   </div>
                //   {showSubBar && <Submenu category={item.category} />}
                // </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navigation