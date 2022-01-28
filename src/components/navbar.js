import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
            className='insta-logo'
            alt=''
          />
          <input type='text ' className='search-box' placeholder='search ' />
          <div className='nav-item'>
            <img src='./img/home.PNG' className='icons' alt='icon' />
            <img src='./img/messenger.png' className='icons' alt='icon' />
            <img src='./img/add.png' className='icons' alt='icon' />
            <img src='./img/explore.png' className='icons' alt='icon' />
            <img src='./img/like.png' className='icons' alt='icon' />
            <div className='icons user-profiles' />
          </div>
        </div>
      </div>
    </nav>
  );
}
