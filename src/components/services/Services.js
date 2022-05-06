import services from './services.css'

import React from 'react'
import {ImCheckmark} from 'react-icons/im'

export const Services = () => {
  return (
    <div id='services'>
    <h2 id='services-on-offer'>What I can do</h2>
    <div className='services'>
   
       <div className='services-wrapper'>
       
        <div className='service-collection'>
        <h2 id='web'>Web Applications</h2>
        <h4 id='what-ican-do'>I am able to develop:</h4>
          <article>
            <div className='icon-and-description'>
              <ImCheckmark className='description-icon'/>
              <h5>Web applications using PHP and Slim Framework</h5>
            </div>
            
          </article>

          <article>
            <div className='icon-and-description'>
              <ImCheckmark className='description-icon' />
              <h5>Web applications using C# with ASP.Net Framework</h5>
            </div>
            
          </article>

          <article>
            <div className='icon-and-description'>
              <ImCheckmark className='description-icon'/>
              <h5>Web applications using PHP and React as the frontend user interface</h5>
            </div>
            
          </article>

          <article>
            <div className='icon-and-description'>
              <ImCheckmark className='description-icon' />
              <h5>Web applications using C# and React as the frontend user interface</h5>
            </div>
            </article>
        </div>
       </div>

       <div className='services-wrapper'>
       <div className='service-collection-two'>
       <h2 id='mobile'>Mobile Applications</h2>
       <h4 id='what-ican-do'>I am able to develop:</h4>
       <article>
            <div className='icon-and-description'>
              <ImCheckmark className='description-icon'/>
              <h5>Mobile applications using dart and flutter</h5>
            </div>
            
          </article>

          <article>
          <div className='icon-and-description'>
            <ImCheckmark className='description-icon'/>
            <h5>Mobile applications using Xamarin</h5>
          </div>
          
        </article>

        <article>
        <div className='icon-and-description'>
          <ImCheckmark className='description-icon'/>
          <h5>Mobile applications using React Native</h5>
        </div>
        
      </article>

      <article>
      <div className='icon-and-description'>
        <ImCheckmark className='description-icon'/>
        <h5>Mobile applications using Flutter and C#</h5>
      </div>
      
    </article>

       </div>
       </div>

    </div>
   
    </div>
  )
}
