import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav>
      <Link to="/causes" >
        <button className="navLink" >Cause List</button>
      </Link>
      <h1>Email Action Database</h1>
      {/* <div className="links">
        <Link to="/daycares" >All Centers</Link>
        <Link to="/daycares/favorites" > ❤ s </Link>
        <Link to="/daycares/map" >Map</Link>
      </div> */}
    </nav>
  )
}
