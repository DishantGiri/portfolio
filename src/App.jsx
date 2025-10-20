import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Social from './components/Social'
import Title from './components/Title'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Social/>
      <section id="about">
      <Title title="About Me" />
      <About />
      </section>
      <section id="skills">
      <Title title="Skills & Technologies"/>
      <Skills/>
      </section>
      <section id="contact">
        <Title title="Contact Me"/>
        <Contact/>
      </section>
    </>
  )
}

export default App