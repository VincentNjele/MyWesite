import React from 'react'
import header from './header.css'

import CV from "../../assets/Vin's Resume.pdf"

export const Details = () => {
  return (
    <div className='details'>
    <a href={CV} download className='download-cv' >Download CV</a>
    <a href='#contact' className='we-can-talk'>We can talk</a>
    </div>
  )
}