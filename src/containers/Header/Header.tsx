import React from 'react'
import "./style.scss";
import logo from "../../assets/logo.png";
import Button from '../../components/Button/Button';

function Header() {
    return (
        <div className="header-wrapper">
            <img src={logo} alt="logo" className="header-logo" />
            <Button name="Đăng nhập" classes="btn login-btn" />
        </div>


    )
}

export default Header