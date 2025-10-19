import React from 'react'
import './Navbar.css'
import mail_icon from '../assets/icon.png'

const Navbar = () => {
  return (
    <div>
        <nav className='nav-bar'>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>             
            </ul>
            <button className='btn contact'><span>Contact Me</span>
                <img src={mail_icon} alt="" className='button-icon'/>
            </button>
        </nav>
    </div>
  )
}

export default Navbar