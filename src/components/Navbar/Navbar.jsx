import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav container' >
      <div className="nav-logo">
        <p>Ev-olution</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact' >Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
