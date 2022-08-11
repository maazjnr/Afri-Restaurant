import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter' />
    </div>

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
        Grecht Restaurant is the best and modern Restaurant
        and have won multiple proven award across the globe,
        different categories of all type of foods and drinks.
        </p>
        <button type='Button' className='custom__button' style={{marginTop: '10px'}}
        >Know More
        </button>
      </div>

      <div className='app__aboutus-content__knife flex__center'>
        <img src={images.knife} alt='knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
        Grecht Restaurant is well known and recognize across the globe,
        in all over the continent, we provide the best restaurant service.
        </p>
        <button type='Button' className='custom__button' style={{marginTop: '10px'}}
        >Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
