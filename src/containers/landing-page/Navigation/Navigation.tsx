import { useState } from 'react'
import "./style.scss"
import "./responsive.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faMagnifyingGlass,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { navBar } from "../../../mockData/mockdata"
import Category from './Category/Category'

function Navigation() {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [showSearchField, setShowSearchField] = useState<boolean>(false);
  
  const handleSearchBtnOnClick = () => {
    setShowSearchField(true);
  }

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="dropDownBtn-wrapper">
          <FontAwesomeIcon icon={faBars} className="dropDownBtn" onClick={() => setShowNavBar(!showNavBar) } />
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
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchBtn" onClick={handleSearchBtnOnClick}/>
        </div>
        <div className={`header-search-field-wrapper ${showSearchField && "show"}`}>
        <input className="header-search-field" type="text" name="searchText" id="searchText" placeholder="Nhập ít nhất 3 ký tự" />
        <FontAwesomeIcon icon={faXmark} onClick={()=> setShowSearchField(false)} className="header-search-field-close-icon"/>
        </div>
        
      </div>
    </div>

  )
}

export default Navigation