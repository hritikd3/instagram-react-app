import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            className="insta-logo"
            alt=""
          />
          <input type="text " className="search-box" placeholder="search " />
          <div className="nav-items">
            <img src="./img/home.PNG" className="icons" />
            <img src="./img/messenger.png" className="icons" />
            <img src="./img/add.png" className="icons" alt="" />
            <img src="./img/explore.png" className="icons" alt="" />
            <img src="./img/like.png" className="icons" alt="" />
            <div className="icons user-profiles" />
          </div>
        </div>
      </nav>
    </div>
  );}
