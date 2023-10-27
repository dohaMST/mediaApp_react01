import React from 'react'
import {PermMedia, Label, Room,EmojiEmotions} from "@mui/icons-material"

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="./assets/person/1.jpeg" alt="#" className="shareProfileImg" />
                <input type="text" className="shareInput" placeholder='what is in your mind doha ...' />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionText">location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                        <span className="shareOptionText">feelings</span>
                    </div>
                </div>
                <button className='shareButton'>share</button>
            </div>
        </div>
    </div>
  )
}

export default Share