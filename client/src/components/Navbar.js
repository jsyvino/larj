import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav>
    <div className='nav-bar'>
      <h3>Email Action Database</h3>
      <Link to="/causes" >
        <button className="navLink" >Cause List</button>
      </Link>
      {/* <div className="links">
        <Link to="/daycares" >All Centers</Link>
        <Link to="/daycares/favorites" > ❤ s </Link>
        <Link to="/daycares/map" >Map</Link>
      </div> */}
    </div>
    </nav>
  )
}
