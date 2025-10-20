import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Social from './components/Social'
import Title from './components/Title'
import About from './components/About'
import Skills from './components/Skills'


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
    </>
  )
}

export default App