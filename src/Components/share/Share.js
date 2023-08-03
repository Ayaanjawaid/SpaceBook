import React from "react";
import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {AiFillTag } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
function Share() {
    var style1={color:"blueviolet"};
    var style2={color:"red"};
    var style3={color:"green"};
    var style4={color:"blue"};
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareImg" src="friend3.jpg" alt="Aj" />
                    <input placeholder="What's in your mind Ayaan " className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBotton1">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia style={style1} className="shareIcon"/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <FaLocationDot style={style2} className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <AiFillTag style={style3} className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <BsFillEmojiLaughingFill style={style4} className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                <button className="shareButton">Share</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Share;