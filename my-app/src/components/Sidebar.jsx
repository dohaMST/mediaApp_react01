import React from 'react';
// import '../styles/_sidebar.scss';
import {RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline,  Event,School } from "@mui/icons-material"
import {users} from "../data"
import CloseFriend from './CloseFriends';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className='sidebarIcon' />
            <span className="sidebarListItemText">chats</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircle className='sidebarIcon' />
            <span className="sidebarListItemText">videos</span>
          </li>

          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className="sidebarListItemText">groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListItemText">bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListItemText">questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">jobs</span>
          </li>

          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className="sidebarListItemText">events</span>
          </li>

          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className="sidebarListItemText">courses</span>
          </li>

        </ul>
        <button className="sidebarButton">show more</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          
          {users.map(u=>(
            <CloseFriend key ={u.id } user ={u} />
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar