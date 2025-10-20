import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills" id='skills'>
        <div className="container">
            <div className="item item-1">
                <h2>Languages</h2>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>HTML & CSS</li>
                </ul>
            </div>
            <div className="item item-2">
                <h2>Technical Skills</h2>
                <ul>
                    <li>Graphics Design</li>
                    <li>Arduino Projects</li>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                </ul>
            </div>
            <div className="item item-3">
                <h2>Tools</h2>
                <ul>
                    <li>Visual Studio</li>
                    <li>Xampp</li>
                    <li>Github</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
        <div className="second-grid">
            <div className="item item-4">
                <h2>Databases</h2>
                <ul>
                    <li>MySQL Database</li>
                    <li>PostgreSQL Database</li>
                </ul>
            </div>
            <div className="item item-5">
                <h2>Soft Skills</h2>
                <ul>
                    <li>Adaptability</li>
                    <li>Time Management</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                </ul>
            </div>
        </div>        
    </div>
  )
}

export default Skills
