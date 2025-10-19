import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Social from './components/Social'
import Title from './components/Title'
import About from './components/About'


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Social/>
      <Title title="About Me"/>
      <About/>
    </>
  )
}

export default App