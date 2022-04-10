import React from 'react'
import "./style.scss"
import "./responsive.scss"
function UserInfoHeader({ displayName = "Default Username", photoURL = "https://picsum.photos/200/300" }: {
  displayName: string | null,
  photoURL?: string
}) {
  return (
    <div className="user-info-header">
      <img className="user-header-img" src={photoURL} />
      <p className="user-header-text">{displayName}</p>
    </div>
  )
}

export default UserInfoHeader