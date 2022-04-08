import React from 'react'
import "./style.scss";
import "./responsive.scss";
import logo from "../../../assets/logo.png";
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-logo-wrapper">
                <Link to="/">
                    <img src={logo} alt="logo" className="header-logo" />
                </Link>

            </div>

            <div className="header-btn-wrapper">
                <Link to="/register">
                    <Button name="Đăng ký" className="signup-btn-hidden" />
                </Link>
                <Link to="/login">
                    <Button name="Đăng nhập" className="login-btn" />
                </Link>
            </div>
        </div>
    )
}

export default Header