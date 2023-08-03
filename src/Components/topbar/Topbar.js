import React, { useState } from "react";
import "./topbar.css";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";

function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MySpaceBook<TiSocialInstagramCircular/></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch />
          <input className="searchInput" placeholder="Search for Friend, post or video" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUserAlt />
            <span className="tobarIconBadge">6</span>
          </div>
          <div className="topbarIconItem">
            <FaRegCommentAlt />
            <span className="tobarIconBadge">28</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="tobarIconBadge">56</span>
          </div>
        </div>
        <img src="friend3.jpg" alt="image" className="topbarImg" />
        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownToggle}><h3><IoMdArrowDropdown/></h3></button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
              <a href="#">Help</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;

