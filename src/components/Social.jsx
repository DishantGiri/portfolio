import React from 'react'
import facebook from '../assets/facebook1.png'
import linkedin from '../assets/linkedin1.png'
import instagram from '../assets/instagram1.png'
import github from '../assets/github1.png'
import './Social.css'

const Social = () => {
  return (
    <div className="social">
        <a href="https://www.facebook.com/dishantgiri127" target='#'>
        <img src={facebook} alt="" />
        </a>
        <a href="" target='#'>
        <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/DishantGiri" target='#'>
        <img src={github} alt="" />
        </a>
        <a href="https://www.instagram.com/dishant.java/" target='#'>
        <img src={instagram} alt="" style={{borderRadius: '8px'}}/>
        </a>
    </div>
  )
}

export default Social