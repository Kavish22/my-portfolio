import React from 'react'
import './Portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
        <div className='image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>this is a portfolio image</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>this is a portfolio image</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>this is a portfolio image</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>this is a portfolio image</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>this is a portfolio image</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
      
        <article className='portfolio__item'>
        <div className='image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>this is a portfolio image</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
      
       
      </div>
    </section>
  )
}

export default Portfolio