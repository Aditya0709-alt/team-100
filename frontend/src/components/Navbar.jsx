import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav>
    <div className="Navbar-menu">
      <div className="Navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul>
        <li><a href="#">Survey Links</a></li>
        <li><a href="#">Upload Data</a></li>
        <li><a href="#">Teacher Name</a></li>
      
      </ul>
    </div>
  </nav>
  )
}

export default Navbar