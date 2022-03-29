import "../style.scss"
import "../responsive.scss"
import { useEffect } from "react"
import DirectoryPath from '../../../components/DirectoryPath/DirectoryPath'
import Input from "../../../components/Input/Input"
import Button from "../../../components/Button/Button"
import { Link } from "react-router-dom"
import { database } from "../../../firebase-config"
import { collection, getDocs } from "@firebase/firestore"

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <DirectoryPath currentDirectory="login" />
      <div className="login-form-wrapper">
        <div className="login-form-container">
          <div className="login-form-title">
            <h3>Xin chào</h3>
            <p>Đăng nhập vào tài khoản của bạn</p>
          </div>
          <div className="login-form-input-wrapper">
            <form className="login-form">
              <Input
                label="Tên đăng nhập:"
                name="id"
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="ID Tài khoản" />

              <Input
                label="Mật khẩu:"
                type="password"
                name="password"
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Mật khẩu"
              />
              <div className="saved-login-info-container">
                <Input type="checkbox" name="saved-login-info" className="saved-login-info-checkbox" />
                <label htmlFor="saved-login-info">Ghi nhớ đăng nhập</label>
              </div>
              <Button name="Đăng nhập" className="login-btn login-page-btn" />

            </form>
          </div>

          <div className="login-form-options">
            <Link to="/login">Bạn quên mật khẩu?</Link>
            <Link to="/register"><p>Tạo tài khoản mới</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage