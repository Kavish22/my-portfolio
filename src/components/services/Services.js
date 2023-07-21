import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">

      <article className="service">
        <div className="service__head">
          <h3>UI/UX Designer</h3>
        </div>  

        <ul className='service__list'>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
        </ul>
      </article>

      {/* ENd OF UI  */}

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>  

        <ul className='service__list'>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
        </ul>
      </article>

       {/* ENd OF WeB DEvelopmentI  */}

       <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>  

        <ul className='service__list'>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className='service_list-icons' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </li>
        </ul>
      </article>
        {/* ENd OF COntent  */}
    </div>
    </section>
  )
}

export default Services