import React from 'react'
import Topbar from '../components/Topbar'
import  Feed  from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <>
        <Topbar/>
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
    </>
  )
}

export default Home