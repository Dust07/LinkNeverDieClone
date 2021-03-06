import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewUserFB } from '../../../redux/actions/users-firebase-authenticate'
import Input from '../../../components/Input/Input'
import DirectoryPath from '../../../components/DirectoryPath/DirectoryPath'
import Button from '../../../components/Button/Button'

function RegisterPage() {
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [newUserFullname, setNewUserFullname] = useState<string>("");
  const [newPhotoURL, setPhotoURL] = useState<string>("N/A");

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault()

    dispatch(addNewUserFB({
      email: newEmail,
      password: newPassword,
      displayName: newUserFullname,
      photoURL: "https://picsum.photos/200/300",
      checkPassword: checkPassword
    }))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <DirectoryPath currentDirectory="register" />
      <div className="login-form-wrapper">
        <div className="login-form-container">
          <div className="login-form-title">
            <h3>Tạo tài khoản</h3>
            <p>Hãy điền đầy đủ thông tin bên dưới để đăng ký tài khoản LinkNeverPhai</p>
          </div>
          <div className="login-form-input-wrapper">
            <form className="login-form">
              <Input
                label="Email:"
                name="email"
                value={newEmail}
                onChange={(e) => setNewEmail((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Email của bạn" />
              <Input
                label="Mật khẩu:"
                type="password"
                name="password"
                value={newPassword}
                onChange={(e) => setNewPassword((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Mật khẩu của bạn" />
              <Input
                label="Nhập lại mật khẩu:"
                type="password"
                name="password-check"
                value={checkPassword}
                onChange={(e) => setCheckPassword((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Nhập lại mật khẩu" />
              <Input
                label="Tên của bạn:"
                name="username"
                value={newUserFullname}
                onChange={(e) => setNewUserFullname((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Họ tên của bạn" />
              <Button name="Đăng ký" className="signup-btn-normal login-register-page-btn" onClick={(e: any) => handleSubmitRegister(e)} />
            </form>
          </div>
          <div className="login-form-options">
            <p>Bạn đã có tài khoản thành viên ? <Link to="/login"><span>Đăng nhập</span></Link></p>
            <Link to="/register"><p>Bạn không nhận được mail?</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage