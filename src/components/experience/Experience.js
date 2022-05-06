import experience from './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

import React from 'react'

export const Experience = () => {
    return (
        <div id='experience'>

           <h2 id='my-experience'>My Experience</h2>
           <h4 id='work-experience'>I have worked on a number of projects and I have experience to work for you</h4>

            <div className='elements'>

                <div className='elements-wrapper'>

                    <h2>Fontend Development</h2>

                    <div className='individual-element'>



                        <article>
                        <div className='experience-detail'>
                            <BsPatchCheckFill className='experience-detail-icon'/>
                            <h4>React</h4>
                            </div>
                            <small>Experienced</small>
                        </article>

                        <article>
                        <div className='experience-detail'>
                        <BsPatchCheckFill className='experience-detail-icon'/>
                        <h4>Flutter</h4>
                        </div>
                        <small>Experienced</small>
                        </article>

                        <article>
                        <div className='experience-detail'>
                            <BsPatchCheckFill className='experience-detail-icon'/>
                            <h4>HTML</h4>
                            </div>
                            <small>Experienced</small>
                        </article>

                        <article>
                           <div className='experience-detail'>
                            <BsPatchCheckFill className='experience-detail-icon'/>
                            <h4>CSS</h4>
                            </div>
                            <small>Experienced</small>
                        </article>

                        <article>
                        <div className='experience-detail'>
                            <BsPatchCheckFill className='experience-detail-icon'/>
                            <h4>JavaScript</h4>
                            </div>
                            
                            <small>Experienced</small>
                        </article>

                        <article>
                        <div className='experience-detail'>
                            <BsPatchCheckFill className='experience-detail-icon'/>
                            <h4>Bootstrap</h4>
                            </div>
                            <small>Intermediate</small>
                        </article>

                    </div>
                </div>

                <div className='elements-wrapper'>

                    <h2>Backend Development</h2>

                    <div className='individual-element'> 
                    <article>
                    <div className='experience-detail'>
                        <BsPatchCheckFill className='experience-detail-icon'/>
                        <h4>C#</h4>
                        </div>
                        <small>Experienced</small>
                    </article>

                    <article>
                    <div className='experience-detail'>
                        <BsPatchCheckFill className='experience-detail-icon' />
                        <h4>PHP</h4>
                        </div>
                        <small>Experienced</small>
                    </article>

                    <article>
                    <div className='experience-detail'>
                        <BsPatchCheckFill className='experience-detail-icon'/>
                        <h4>SQL</h4>
                        </div>
                        <small>Experienced</small>
                    </article>

                    <article>
                    <div className='experience-detail'>
                        <BsPatchCheckFill className='experience-detail-icon'/>
                        <h4>.NET</h4>
                        </div>
                        <small>Experienced</small>
                    </article>

                    <article>
                    <div className='experience-detail'>
                        <BsPatchCheckFill className='experience-detail-icon'/>
                        <h4>Dart</h4>
                        </div>
                        <small>Intermediate</small>
                    </article>

                    </div>

                   
                </div>

            </div>
        </div>
    )
}
