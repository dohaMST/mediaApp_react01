import React from 'react'
import {users} from "../data"
import Online from './Online'
function Rightbar({profile}) {

  const HomeRightBar = ()=>{
   return(
    <>
      <div className="bdContainer">
        <img src="./assets/gift.png" alt="" className="bdImg" />
        <span className="bdText">
          <b>pola foster</b> and <b>3 other friends</b> have abirthday  today
        </span>
      </div>
      <img src="./assets/ad.png" alt="" className="rightbarAD" />
      <h4 className="rightbarTitle">online friends</h4>
      <ul className="rightbarFriendList">
          {users.map(u=>
            (
              <Online key = {u.id} user = {u}/>
            )
          )}

      </ul>
    </>
   )
  }

  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className="rightbarTitle">user informations</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">city :</span>
            <span className="rightbarInfoValue">new york</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">from :</span>
            <span className="rightbarInfoValue">madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">relationShip :</span>
            <span className="rightbarInfoValue">single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">user friends</h4>

        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="" className="rightbarfollowingImg" />
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/2.jpeg" alt="" className="rightbarfollowingImg" />
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/3.jpeg" alt="" className="rightbarfollowingImg" />
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/4.jpeg" alt="" className="rightbarfollowingImg" />
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/5.jpeg" alt="" className="rightbarfollowingImg" />
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/6.jpeg" alt="" className="rightbarfollowingImg" />
            <span className="rightbarFollowingName">john carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar