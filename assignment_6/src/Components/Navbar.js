import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'
function navbar() {
  return (
    <nav>
        <ul>
        <li><Link to="/">UseMemo</Link></li>
        <li><Link to="Form">Form</Link></li>
        
            
        </ul>
    </nav>
  )
}

export default navbar