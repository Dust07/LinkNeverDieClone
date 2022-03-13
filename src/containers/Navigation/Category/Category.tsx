import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import Submenu from './Submenu/Submenu'
import "./style.scss"
import "./responsive.scss"


function Category({ item, index }: any) {
    const [showSubBar, setShowSubBar] = useState(false);

    const handleHoverCategory = () => {
        setShowSubBar(true);
    }
    const handleLeaveCategory = () => {
        setShowSubBar(false);
    }
    return (
        <div className="position-relative">
            <li key={index} onMouseEnter={handleHoverCategory} onMouseLeave={handleLeaveCategory} className="position-relative">
                <div className="top-level-category" >
                    <h3 className={`${showSubBar ? "highlighted" : ""}`}>{item.context}</h3>
                    {item.category ?
                        <FontAwesomeIcon icon={faChevronDown} className={`category-arrow ${showSubBar ? "highlighted" : ""}`} />
                        : ""}
                </div>
                <Submenu category={item.category} className={showSubBar ? "category-wrapper show-submenu" : "category-wrapper"} />

            </li>
        </div>
    )
}

export default Category