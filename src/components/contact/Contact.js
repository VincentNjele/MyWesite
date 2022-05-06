import React from 'react'
import contact from './contact.css'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export const Contact = () => {
    return (
        <div id='contact'>
            <div className='contact-details'>
            <h2 className='talk-to-me'>Contact Me</h2>
            <h4 id='reach-me'>You can reach me using the details below</h4>
                <div className='contact'>
                    <div className='contact-me'>

                    <article>
                    <MdEmail id='contact-icon'/>
                    <h5>njelevincent0@gmail.com</h5>
                    <h4>Send me a message</h4>
                  
                   </article>
                 
                 
                   </div>
                   <div className='contact-me'>
                     <article>
                      <BsFacebook id='contact-icon'/>
                      <h5>Fash Oda</h5>
                      <h4>Send me a message</h4>
                     </article>
                     </div>

                     <div className='contact-me'>
                     <article>
                      <BsWhatsapp  id='contact-icon'/>
                      <h5>Vincent</h5>
                      <h4>Send on 0977774423</h4>
                     </article>
                      </div>

                      <div className='contact-me'>
                      <article>
                      <BsFillTelephoneForwardFill id='contact-icon'/>
                      <h5>Vincent Njele</h5>
                      <h4>Call me on 0977774423</h4>
                     </article>
                
                    </div>
                </div>
            </div>
        </div>
    )
}
