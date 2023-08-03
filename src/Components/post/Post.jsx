import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
import React from 'react';
import { Users, Posts } from "../../data";

export default function Post() {
  const uniquePosts = Posts.slice(0, 4); // Get the first four unique posts

  return (
    <div>
      {uniquePosts.map((post) => (
        <div className="post" key={post.id}>
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img src={Users.find((user) => user.id === post.userId).profilePicture} alt="" className="postProfileImg" />
                <span className="postUserName">{Users.find((user) => user.id === post.userId).username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                <FiMoreVertical />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
              <div className="postButtonLeft">
                <img src="like2.jpg" alt="" className="likeIcon" />
                <img src="heart1.jpg" alt="" className="likeIcon" />
                <span className="postlikeCounter">{post.like} people like it</span>
              </div>
              <div className="postButtonRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}














