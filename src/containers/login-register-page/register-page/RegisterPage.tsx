import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewUserFB, validateEmail } from '../../../redux/actions/users-firebase-authenticate'
import { usersSlice } from '../../../redux/reducers/users'
import Input from '../../../components/Input/Input'
import DirectoryPath from '../../../components/DirectoryPath/DirectoryPath'
import Button from '../../../components/Button/Button'
import { modalSlice } from '../../../redux/reducers/modal'

function RegisterPage() {
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [newUserFullname, setNewUserFullname] = useState<string>("");
  const [newPhotoURL, setPhotoURL] = useState<string>("N/A");

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault()

    if (newPassword !== checkPassword) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Password doesn't match, please try again."))
      return
    }

    if (!validateEmail(newEmail)) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Wrong email type, please try again"))
      return
    }

    if (newPassword.length <= 6) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Password need to have at least 7 characters."))
      return
    }

    dispatch(usersSlice.actions.FETCH_USER("Fetching"))
    try {
      await addNewUserFB({
        email: newEmail,
        password: newPassword,
        displayName: newUserFullname,
        photoURL: newPhotoURL,
      })
      dispatch(usersSlice.actions.CREATE_NEW_USER_SUCCESS("New profile created"))
      dispatch(modalSlice.actions.SHOW_MODAL_NORMAL("Tạo tài khoản thành công!"))
    }
    catch (error) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Unexpected Error: " + error))
      dispatch(usersSlice.actions.CREATE_NEW_USER_FAILED("Failed, please try again"))
    }
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