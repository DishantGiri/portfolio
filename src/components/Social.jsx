import React from 'react'
import facebook from '../assets/facebook1.png'
import linkedin from '../assets/linkedin1.png'
import instagram from '../assets/instagram1.png'
import github from '../assets/github1.png'
import './Social.css'

const Social = () => {
  return (
    <div className="social">
        <a href="https://www.facebook.com/dishantgiri127" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/DishantGiri" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/dishant.java/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" style={{borderRadius: '8px'}}/>
        </a>
    </div>
  )
}

export default Social