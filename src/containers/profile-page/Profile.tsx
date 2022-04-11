import './style.scss'
import './responsive.scss'
import { auth } from '../../firebase-config';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import { deleteUserFB, updateUserFB } from '../../redux/actions/users-firebase-authenticate';
import { useDispatch } from 'react-redux';

function Profile() {
  const dispatch = useDispatch()
  const user = auth.currentUser
  const { uid, displayName, photoURL, email }: any = user
  const [newDisplayName, setNewDisplayName] = useState<string>("")
  const [newPhotoURL, setNewPhotoURL] = useState<string>("")
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleCancelEdit = () => {
    setNewPhotoURL("")
    setNewDisplayName("")
    setEditMode(false)
  }

  const handleConfirmEdit = () => {
    dispatch(updateUserFB({ displayName: newDisplayName, photoURL: newPhotoURL }))
  }

  const handleDeleteUser = () => {
    dispatch(deleteUserFB())
  }

  return (
    <div className="profile-container">
      <div className="account-summary-container">
        <img src={photoURL} alt={`${displayName}'s avatar`} />
        <span className="profile-highlight">{displayName}</span>
      </div>
      <div className="account-detail-container">
        <div className="profile-wrapper">

          <div className="account-detail-title-container">
            <h3 className="account-detail-title">
              Thông tin của <span className="profile-highlight">{displayName}</span>
            </h3>
          </div>
          <div>
            <ul className="account-detail-list">
              <li>
                User ID: <span className="profile-highlight">{uid}</span>
              </li>
              <li>
                Email: <span className="profile-highlight">{email}</span>
              </li>
              <li>
                Display Name: <span className="profile-highlight">{displayName}</span>
              </li>
              <li>
                photoURL: <span className="profile-highlight">{photoURL}</span>
              </li>
            </ul>
          </div>
          <div className="account-detail-edit-container">
            <Button name="Chỉnh sửa thông tin" onClick={() => setEditMode(!editMode)}></Button>
          </div>

          {editMode &&
            <div className="edit-panel">
              <div>
                <Input
                  label="New display name: "
                  name="displayName"
                  className="edit-displayname-input"
                  value={newDisplayName}
                  onChange={(e) => setNewDisplayName((e.target as HTMLTextAreaElement).value)}
                />
              </div>
              <div>
                <Input
                  label="New photo URL: "
                  name="photoURL"
                  className="edit-displayname-input"
                  value={newPhotoURL}
                  onChange={(e) => setNewPhotoURL((e.target as HTMLTextAreaElement).value)}
                />
              </div>
              <div className="edit-confirm-btn-container">
                <Button name="Thay đổi" className="login-btn profile-edit-confirm-btn" onClick={() => handleConfirmEdit()}></Button>
                <Button name="Hủy" className="warning-btn profile-edit-confirm-btn" onClick={() => handleCancelEdit()}></Button>
              </div>
              <Button name="Xóa tài khoản" className="warning-btn" onClick={() => handleDeleteUser()} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile