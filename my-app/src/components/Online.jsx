import React from 'react'

function Online({user}) {
  return (
    <>
        <li className="rightbarFriend">
            <div className="rightbarImgProfileContainer">
              <img src={user.profilePicture} alt="" className="rightbarPrifileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <div className="rightbarUsername">{user.username}</div>
        </li>
    </>
  )
}

export default Online