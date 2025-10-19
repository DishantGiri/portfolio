import React from 'react'
import pp from '../assets/hero.png'
import './About.css'

const About = () => {
  
  
  return (
    <div className="about">
      <div className="about-left">
        <img src={pp} alt="Profile" />
      </div>
      <div className="about-right">
        <p>
        I am a highly motivated final-year BSc.IT student at Informatics College, Pokhara, with strong expertise in full-stack development, Python, Java, Spring Boot, and database management. I have hands-on experience designing, developing, and deploying web applications and software solutions, with a focus on building efficient, scalable, and user-friendly systems.
        </p>
        <p>
        Alongside my technical skills, I have developed excellent problem-solving, teamwork, and communication abilities through academic projects, internships, and extracurricular activities. I am passionate about leveraging technology to create innovative solutions, continuously learning emerging tools and frameworks, and contributing effectively to collaborative projects.
        </p>
        
        </div>
      </div>
  )
}

export default About