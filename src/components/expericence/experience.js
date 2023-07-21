import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (

    <section id='experience'>
    <h5>Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">

      <div className="experience__frontend">
        <h3>Frontend Development</h3>
      <div className="experience__content">

    
  
     {/* 1 */}


        <article className='experience__details'>
          <BsPatchCheckFill className='icons'  />
          <div><h4>HTML</h4></div>
        </article>


       {/* 1 */} 
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
          <div><h4>CSS</h4></div>
        </article>
       {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
          <div><h4>JavaScript</h4></div>
        </article>
       {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
         <div><h4>BootStrap</h4> </div> 
        </article>
       {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
         <div><h4>React.JS</h4></div> 
        </article>


      </div>
      </div>
      
      {/* // end of frontend  */}

      <div 
      className="experience__backend">
        <h3>Backend Development</h3>
        
      <div className="experience__content">
        {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
         <div><h4>Node.JS</h4></div> 
        </article>
        {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
         <div><h4>JAVA</h4></div>
        </article>
        {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
         <div> <h4>SPRING BOOT</h4></div>
        </article>
        {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
          <div><h4>MONGO DB</h4></div>
        </article>
        {/* 1 */}
        <article className='experience__details'>
          <BsPatchCheckFill className='icons'/>
          <div><h4>MY SQL</h4></div>
        </article>
        
      </div>
      </div>
    </div>    
    </section>
  )
}

export default Experience