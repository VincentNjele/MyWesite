import React from 'react'
import { Details } from './Details'
import header from './header.css'
import image from '../../images/Vincent.jpg'
import { Social } from './Social'
import { Tabs } from './Tabs'
import { Image } from './Image'

export const Header = () => {
  return (

    <div>
    <section className='header'>
    <h5>Hello</h5>
     <h2>My name is Vincent Njele</h2>
      <h4>I am a fullStack Developer</h4>
     <Details />
     <Image />
     <Social />
    </section>
    <Tabs />
    </div>
  )
}
