import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export function Navbar(props) {

  return (
    <nav>
      <Link to="/causes" >
        <button className="navLink" >Home</button>
      </Link>
      <h1>Email Action Database</h1>
      {/* <div className="links">
        <Link to="/daycares" >All Centers</Link>
        <Link to="/daycares/favorites" > ❤ s </Link>
        <Link to="/daycares/map" >Map</Link>
      </div> */}
    </nav>
  );
}


const mapState = (state, ownProps) => {
  return {
    user: state.user,
  }
}

export default connect(mapState)(Navbar)
