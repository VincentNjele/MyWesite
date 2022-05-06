import React from 'react'
import about from './about.css'
import image from '../../assets/Vincent-grad.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaLockOpen} from 'react-icons/fa'

export const About = () => {
  return (


    <div id='about'>

      <div className='image-description'>
           <h2>All you need to know about me</h2>
        <div className='image-background'>
          <img id='image-name' src={image} alt="vin"></img>

          <article className='backround'>

            <p id='backround-title'>Background</p>

            <p id='background-description'>Innovative and technically-astute Software
              Developer well-versed in analyzing user needs and
              developing software to precisely meet diverse
              needs. Demonstrates mastery of multiple
              programming languages and proactively keeps up
              with industry trends. I am a hard worker, team
              player, result-oriented and Customer-focused
              software professional with superior communication
              skills and expertise in various technical
              platforms.Understands and meets both client and
              employer needs in a stipulated time-frame</p>
          </article>

        </div>


        <div className='articles'>

        <div className='place-item'>
          <article className='about-me' >
           <FaAward className='award' />
            <h4>My Experience</h4>
            <small>2+ Years </small>
          </article>

          </div>

          <article className='about-me'>
            <VscFolderLibrary className='award' />
            <h4>Completed Projects</h4>
            <small>5+ Projects </small>
          </article>

          <article className='about-me'>
            <FaLockOpen className='award' />
            <h4>Availabiltiy ?</h4>
            <small>I am available</small>
          </article>
        </div>
      </div>

      <div className=''>
      </div>
    </div>

  )
}
