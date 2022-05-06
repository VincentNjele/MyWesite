import React from 'react'
import header from './header.css'
import { Details } from './Details'
import { Image } from './Image'
import { Social } from './Social'

export const Headers = () => {
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
        </div>
    )
}
