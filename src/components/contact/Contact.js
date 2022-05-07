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
                 
                    <a href='mailto: njelevincent0@gmail.com' target="_blank">
                      
                    <article>
                    <MdEmail id='contact-icon'/>
                    <h5>njelevincent0@gmail.com</h5>
                    <h4>Send me a message</h4>
                  
                   </article>
                    
                    </a>
                   
                 
                 
                   </div>
                   <div className='contact-me'>

                   <a href="">
                   <article>
                      <BsFacebook id='contact-icon'/>
                      <h5>Fash Oda</h5>
                      
                     </article>
                     <h4>Send me a message</h4>
                   </a>
                     
                     </div>

                     <div className='contact-me'>
                     <a href="https://wa.me/+260977774423" target="_blank">
                     <article>
                      <BsWhatsapp  id='contact-icon'/>
                      <h5>Vincent</h5>
                      
                     </article>
                     
                    </a>
                    <h4>Whatsapp Me</h4>
                      </div>

                      <div className='contact-me'>

                      <a href='tel: +260977774423' alt='0977774423' >
                       <article>
                      <BsFillTelephoneForwardFill id='contact-icon'/>
                      <h5>Vincent Njele</h5>
                      <h4>Call me on 0977774423</h4>
                     </article>
                     </a>
                     
                
                    </div>
                </div>
            </div>
        </div>
    )
}
