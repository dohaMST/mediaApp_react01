import React from 'react'
import Share from './Share'
import Post from './Post'
import {posts} from '../data'

function Feed() {
  return (
    <div className='feed'>
      <Share />
      {posts.map((p)=>(
        // <Post key={p.id} p = {p} />
        <Post key={p.id} date={p.date} like={p.like} comment ={p.comment} id = {p.userId} desc={p.desc} photo={p.photo} />
      ))}
      
    </div>
  )
}

export default Feed