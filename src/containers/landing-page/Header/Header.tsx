import React from 'react'
import "./style.scss";
import "./responsive.scss";

import logo from "../../../assets/logo.png";
import Button from '../../../components/Button/Button';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-logo-wrapper">
                <img src={logo} alt="logo" className="header-logo" />
            </div>
            <div className="header-btn-wrapper">
                <Button name="Đăng ký" className="signup-btn" />
                <Button name="Đăng nhập" className="login-btn" />
            </div>
        </div>
    )
}

export default Header