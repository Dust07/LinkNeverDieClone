import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import Submenu from './Submenu/Submenu'
import "./style.scss"

function Category({ item, index }: any) {
    const [showSubBar, setShowSubBar] = useState(false);

    const handleClickCategory = () => {
        setShowSubBar(!showSubBar);
    }
    return (
        <li key={index} onClick={handleClickCategory}>
            <div className="top-level-category">
                <h3>{item.context}</h3>
                {item.category ?
                    <FontAwesomeIcon icon={faChevronDown} />
                    : ""}
            </div>
            {showSubBar && <Submenu category={item.category} className="show-submenu" />}
        </li>
    )
}

export default Category