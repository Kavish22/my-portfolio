import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';



// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  { 
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quibusdam pariatur, dolorem nisi eveniet sint ipsum enim soluta, saepe beatae illo, atque vero veniam? Quas molestias cum aut voluptas.'

  },
  {
    avatar: AVTR2,
    name: 'Janvi Singh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quibusdam pariatur, dolorem nisi eveniet sint ipsum enim soluta, saepe beatae illo, atque vero veniam? Quas molestias cum aut voluptas.'

  },
  {
    avatar: AVTR3,
    name: 'Ritesh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quibusdam pariatur, dolorem nisi eveniet sint ipsum enim soluta, saepe beatae illo, atque vero veniam? Quas molestias cum aut voluptas.'

  },
  {
    avatar:AVTR4,
    name: 'Jatin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique quibusdam pariatur, dolorem nisi eveniet sint ipsum enim soluta, saepe beatae illo, atque vero veniam? Quas molestias cum aut voluptas.'

  }
]

const Testtimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
         // install Swiper modules
         modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    
      >
      
      {
        data.map(({avatar, name, review}, index)=> {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )

        })
      }
      </Swiper>
    </section>
  )
}

export default Testtimonials