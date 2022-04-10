import { useEffect } from 'react'
import "./style.scss";
import "./responsive.scss";
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase-config"
import { useState } from 'react';
import logo from "../../../assets/logo.png";
import Button from '../../../components/Button/Button';
import UserInfoHeader from '../../../components/UserInfoHeader/UserInfoHeader';

function Header() {

    const [loginStatus, setLoginStatus] = useState<boolean>(false);
    const [currentUserDisplayName, setCurrentUserDisplayName] = useState<string | null>("Default Statename")
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoginStatus(true)
                setCurrentUserDisplayName(user.displayName)
            } else {
                setLoginStatus(false)
            }
        });
    }, [])

    return (
        <div className="header-wrapper">
            <div className="header-logo-wrapper">
                <Link to="/">
                    <img src={logo} alt="logo" className="header-logo" />
                </Link>

            </div>


            {!loginStatus && <div className="header-btn-wrapper">
                <Link to="/register">
                    <Button name="Đăng ký" className="signup-btn-hidden" />
                </Link>
                <Link to="/login">
                    <Button name="Đăng nhập" className="login-btn" />
                </Link>
            </div>}

            {loginStatus && <UserInfoHeader displayName={currentUserDisplayName} />}
        </div>
    )
}

export default Header