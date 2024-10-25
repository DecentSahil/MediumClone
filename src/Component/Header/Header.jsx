import React from 'react';
import './Header.css';

function Header() {
  const title = "Welcome to My Website";

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? "Good Morning!" : "Good Evening!";
  };

  return (
    <div className='headermain'>
      <div>
        <p className='heading1'>Human Stories & Ideas</p>
        <p className='heading2'>A place to read, write, and deepen your understanding</p>
        <button className='ReadButton'>Start Reading</button>
      </div>
      <div className='image'></div>
    </div>
  );
}

export default Header;
