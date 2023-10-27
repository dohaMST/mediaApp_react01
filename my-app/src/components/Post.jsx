import React ,{useState} from 'react'
import {MoreVert} from "@mui/icons-material"
import {users} from "../data"

function Post({ date, like ,comment , desc , photo, id} ) {
    const [liked, setLiked] = useState(like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler=() =>{
        setLiked(isLiked ? liked-1 : liked+1)
        setIsLiked(!isLiked)
    }

    // console.log(post.like)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={users.filter((u)=> u.id === id)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName"> 
                        {users.filter((u)=> u.id === id)[0].username}
                    </span>
                    <span className="postDate"> {date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{desc ? desc : '.'}</span>
                <img src={photo} alt="" className="postImg" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./assets/post/like.png" 
                        alt="#" 
                        onClick={likeHandler}
                        className="likeIcon" />
                    <img src="./assets/post/heart.png"
                        alt="#"
                        onClick={likeHandler}
                        className="likeIcon" />
                    <span className='postLikeCounter'> {liked} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comment} comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post