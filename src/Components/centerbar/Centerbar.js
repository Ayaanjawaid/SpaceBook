import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../data";
import "./centerbar.css";

function Centerbar() {
  const uniquePosts = Posts.slice(0, 1); // Get the first four unique posts

  return (
    <div className="centerbar">
      <div className="centerbarWrapper">
        <Share />
        {uniquePosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Centerbar;
