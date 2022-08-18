import React, { useRef } from 'react';
import {BsArrowLeft, BsArrowRight, BsInstagram} from 'react-icons/bs';
import {SubHeading} from '../../components';
import { images, data } from '../../constants';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02,
  images.gallery03, images.gallery04];

const Gallery = () => {

  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef;
    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else{
      current.scrollRight += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>
          Photo Gallery
        </h1>
        <p className='p__opensans' style={{color: '#aaa', marginTop: '2rem'}}>
          Take a lot at some of our beautiful photos, we have a lot more
          than this but hope you like this.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery' />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
      </div>

      <div className='app__gallery-images-arrow'>
        <BsArrowLeft className='gallery__arrow-icon' onClick={() => scroll('left')}/>
        <BsArrowRight className='gallery__arrow-icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  )
};

export default Gallery;
