import React from 'react'
import portfolio from './portfolio.css'
import image1 from '../../images/lekkit-portfolio.png'
import image2 from '../../images/portfolio2.png'
import image3 from '../../assets/Vincent-grad.jpg'

import { Details } from '../header/Details'

export const Portfolio = () => {
  return (
    <div className='container'>

     <div className='portfolio'>
       <h2 id='portfolio-intro'>My Portfolio</h2>
       <h4 id='projects'>You check through the projects which I have developed</h4>
     <div className='portfolio-wrapper'>

     <div className='individual-portfolio'>

        <article>
        <img id='portfolio-image' src={image1} alt="portfolio"></img>
          <h4 id='project-title'>Lekkit Property </h4>
        <div className='links'>
          <a id='github-portilio' href='https://github.com/VincentNjele/lekkit-app'>Github</a>
          <a id='live-demo' href='https://master.d230644og42rme.amplifyapp.com/'>Live Demo</a>
        </div>
        </article>

     </div>

     <div className='individual-portfolio'>

        <article>
        <img id='portfolio-image' src={image2} alt="portfolio"></img>
          <h4 id='project-title'>Movies API</h4>
        <div className='links'>
          <a id='github-portilio' href='https://github.com/VincentNjele/MoviesApp'>Github</a>
          <a id='live-demo' href='https://main.d1xpd0w6wq7csh.amplifyapp.com/'>Live Demo</a>
        </div>
        </article>

     </div>

     
       <div className='individual-portfolio'>

        <article>
        <img id='portfolio-image' src={image3} alt="portfolio"></img>
          <h4 id='project-title'>C# with .Net</h4>
        <div className='links'>
          <a id='github-portilio' href='https://github.com/VincentNjele/JobRepository'>Github</a>
        </div>
        </article>

     </div>
    

     {
    //    <div className='individual-portfolio'>

    //     <article>
    //     <img id='portfolio-image' src={image1} alt="portfolio"></img>
    //       <h4 id='project-title'>Lekkit Property using React</h4>
    //     <div className='links'>
    //       <a id='github-portilio' href=''>Github</a>
    //       <a id='live-demo' href=''>Live Demo</a>
    //     </div>
    //     </article>

    //  </div>
     }
     </div>
      
     </div>
   
    </div>
  )
}
