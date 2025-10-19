import React, { useState } from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className="title">
        <h3>{props.title}</h3>
        <div className="line"></div>
    </div>
  )
}

export default Title