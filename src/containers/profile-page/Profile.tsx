import { useParams } from 'react-router-dom';
import './style.scss'
import './responsive.scss'
import { auth } from '../../firebase-config';
import Button from '../../components/Button/Button';

function Profile() {
  const user = auth.currentUser
  const { uid, displayName, photoURL, email, password }: any = user
  console.log(photoURL)
  return (
    <div className="profile-container">
      <div className="account-summary-container">
        <img src={photoURL} alt={`${displayName}'s avatar`} />
        <span className="profile-highlight">{displayName}</span>
      </div>
      <div className="account-detail-container">
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
          <Button name="Chỉnh sửa thông tin"></Button>
        </div>

      </div>
    </div >
  )
}

export default Profile