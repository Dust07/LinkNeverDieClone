import React from 'react'
import "./style.scss";
import { logo } from "../../assets/logo";

function Header() {
    return (
        <div className="header-wrapper">
            <img src={logo} />
        </div>
    )
}

export default Header