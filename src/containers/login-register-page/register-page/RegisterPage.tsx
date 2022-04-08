import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/Input/Input'
import DirectoryPath from '../../../components/DirectoryPath/DirectoryPath'
import Button from '../../../components/Button/Button'
import { useDispatch } from 'react-redux'
import { addNewUser } from '../../../redux/actions/users'

function RegisterPage() {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [newUserFullname, setNewUserFullname] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  const handleSubmitRegister = (e: any) => {
    e.preventDefault()
    if (newPassword !== checkPassword) {
      console.log("Password doesn't match, please try again.")
      return
    }
    dispatch(addNewUser({
      username: newUsername,
      password: newPassword,
      email: newEmail,
      user_full_name: newUserFullname
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
                label="Tên của bạn:"
                name="username"
                value={newUserFullname}
                onChange={(e) => setNewUserFullname((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Họ tên của bạn" />
              <Input
                label="Email:"
                name="email"
                value={newEmail}
                onChange={(e) => setNewEmail((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="Email của bạn" />
              <Input
                label="Tên đăng nhập:"
                name="id"
                value={newUsername}
                onChange={(e) => setNewUsername((e.target as HTMLTextAreaElement).value)}
                classNameForLabel="login-register-form-label" className="login-register-form-input-field"
                placeholder="ID Tài khoản" />
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