import "./style.scss"
import "./responsive.scss"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { useDispatch } from "react-redux"
import { usersSlice } from '../../redux/reducers/users'
import { userSignOut } from '../../redux/actions/users-firebase-authenticate'
import { useNavigate } from "react-router-dom"

function UserInfoHeader({ displayName = "Default Username", photoURL = "https://picsum.photos/200/300" }: {
  displayName: string | null,
  photoURL?: string
}) {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handleSignOut = async () => {
    dispatch(usersSlice.actions.FETCH_USER("Fetching"))
    try {
      userSignOut()
      dispatch(usersSlice.actions.USER_SIGN_OUT_SUCCESS("Log out successful."))
      navigate('/', { replace: true })
    }
    catch {
      dispatch(usersSlice.actions.USER_SIGN_OUT_FAILED("Error occured! Please try to log out again"))
    }
  }
  return (
    <>
      <div className="user-info-header">
        <img className="user-header-img" src={photoURL} onClick={() => setShowPopup(true)} />
        <p className="user-header-text">{displayName}</p>
      </div>

      {showPopup && <div className="user-header-options-popup" >
        <div className="user-info-header_popup">
          <img className="user-header-img_popup" src={photoURL} />
          <p className="user-header-text_popup">{displayName}</p>
        </div>

        <div className="user-header-option-container">
          <ul className="user-header-option-list">
            <li>
              <FontAwesomeIcon icon={faUser} />
              <p>Profile</p>
            </li>
            <li onClick={() => handleSignOut()}>
              <FontAwesomeIcon icon={faWindowClose} />
              <p>Log out</p>
            </li>
          </ul>
        </div>
        <div className="hide-user-info-popup-container">
          <Button name="Hide menu  ==>" onClick={() => setShowPopup(false)} />
        </div>
      </div>
      }


    </>

  )
}

export default UserInfoHeader