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
        
        <div className="info-boxes">
          <div className="info-box">
            <h3>Education</h3>
            <ul>
              <li>
                <div className="education-item">
                  <div className="edu-content">
                    <strong>BSc.IT</strong> - Informatics College, Pokhara
                  </div>
                  <span className="date">2023 - Current</span>
                </div>
              </li>
              <li>
                <div className="education-item">
                  <div className="edu-content">
                    <strong>+2 Management</strong> - Roshani School of Management
                  </div>
                  <span className="date">2020 - 2022</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="info-box">
            <h3>Hobbies & Interests</h3>
            <ul>
              <li>Programming & Coding</li>
              <li>Reading</li>
              <li>Puzzle Games</li>
              <li>Music & Travel</li>
              <li>Movies & Shows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About