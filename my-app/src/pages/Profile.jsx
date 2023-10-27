import React from 'react'
import Topbar from '../components/topBar/Topbar'
import  Feed  from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

function Profile() {
  return (
    <>
        <Topbar/>
        
        <div className='profile'>
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="./assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="./assets/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Safak Kocaoglu</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
  )
}
// import Topbar from '../components/topBar/Topbar'

export default Profile