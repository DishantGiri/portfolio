import React, { useState, useEffect } from 'react'
import hero_image from '../assets/hero.png'
import './Hero.css'
import download_icon from '../assets/download-icon.png'
import Social from './Social'


const Hero = () => {
  const skills = ['FullStack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentText === currentSkill) {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentSkill.slice(0, currentText.length + 1));
      } else {
        // Deleting phase
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
          return;
        }
        setCurrentText(currentText.slice(0, -1));
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentSkillIndex, skills, typingSpeed]);

  return (
    <div className="hero">
      <div className="left">
        <img src={hero_image} alt="Dishant Giri" />
      </div>
      <div className="right">
        <h1>Dishant <span style={{color:"rgb(227, 89, 30)"}}>Giri</span></h1>
        <div className="skills-container">
          <h2 className="typing-subtitle">
                {' '}
            <span className="typing-text">
              {currentText}
              <span className="cursor">|</span>
            </span>
          </h2>
        </div>
        <a href="DishantGiri.pdf" download='DishantGiri.pdf' style={{textDecoration:"none"}}>
        <button className='btn' >Download CV
        <img src={download_icon} alt="" className='button-icon'/>
        </button>
        </a>
      </div>
    </div>
  )
}

export default Hero