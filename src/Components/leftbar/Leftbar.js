import React from "react";
import "./leftbar.css";
import { MdRssFeed } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { SiCoursera } from "react-icons/si";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItems">
            <MdRssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItems">
            <BsFillChatDotsFill className="leftbarIcon" />
            <span className="leftbarListItemText">Chat</span>
          </li>
          <li className="leftbarListItems">
            <BiVideo className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItems">
            <MdGroups className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItems">
            <BsFillBookmarkCheckFill className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItems">
            <BsQuestionCircleFill className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItems">
            <MdWork className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItems">
            <BsFillCalendar2EventFill className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItems">
            <SiCoursera className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarhr" />
        <ul className="leftbarFriendList">
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="friend1.jpg" alt="" />
                Smith
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="friend2.jpg" alt="" />
                Anna
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="friend4.jpg" alt="" />
                Jennifer
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="friend5.jpg" alt="" />
                Maria
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="friend6.jpg" alt="" />
                John
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="friend7.jpg" alt="" />
                Sam
            </li>
        </ul>
        <hr></hr>
        <h4 className="rightbarTitle">Articles</h4>
        <img className="leftbarAd" src="art1.jpg" alt=""/>
        <img className="leftbarAd" src="art2.png" alt=""/>
        <img className="leftbarAd" src="art3.png" alt=""/>
      </div>
    </div>
    
  );
}

export default Leftbar;
