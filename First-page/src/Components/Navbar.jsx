// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=() => {
  return (
    <nav>
      <div>
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
