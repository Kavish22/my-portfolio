import React from 'react'
import './About.css'
// import ME from '../../Assests/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

      <div className="about__me">
        <div className="about__me-image">
          <img src="" alt="" />
        </div>
      </div>


      <div className="about__content">
          <div className="about__cards">
           
           {/* first card */}

            <article className='about__card'>
               <h5>Experience</h5>
               <small>Hire me !</small>
            </article>

            {/* second card */}

            <article className='about__card'>
               <h5>Achievements</h5>
               <small>Soon be Updated</small>
            </article>

            {/* // third card */}
            
            <article className='about__card'>
               <h5>Projects</h5>
               <small>In Progress</small>
            </article>
          </div>


          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, libero commodi dicta quod recusandae veritatis delectus ipsum odit optio, perferendis quis amet dolorem!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Share Time</a>
      </div>
      </div>
    </section>
  )
}

export default About;