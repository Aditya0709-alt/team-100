import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div className="Navbar-menu">
      <div className="Navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul>
        <li><a>Survey Links</a></li>
        <li><a>Upload Data</a></li>
        <li><a>Teacher Name</a></li>
        {/* <li><a><Link to='/'>Survey Links</Link></a></li>
        <li><a><Link to='/upload'>Upload Data</Link></a></li>
        <li><a><Link to='/profile'>Survey Links</Link></a></li> */}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar