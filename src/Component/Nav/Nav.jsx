import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = ({ name }) => {
  return (
    <div className='main'>
      {/* <Link to='' className='logo'>Medium</Link>
      <Link to='./OurStory'>OurStory</Link>
      <Link to='./Membership'>Membership</Link> */}

      <a href=""><h1 className='logo'><Link to=''>Medium</Link></h1></a>
      <ul ul className='links' >
        <a href="vite-project\src\ClassWork\dayFive\FirstTask.jsx"><li><Link to='./OurStory'>Our Story</Link></li></a>
        <a href=""><li><Link to='./Membership'>Membership</Link></li></a>
        <a href=""><li>Write</li></a>
        <a href=""><li>Sign In</li></a>
        <a href=""><button className='button'>Get Started</button></a>
      </ul >

    </div>
  )
}

export default Nav



