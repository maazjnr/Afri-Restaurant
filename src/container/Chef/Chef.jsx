import React from 'react';

import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img style={{paddingBottom: '20px'}} src={images.chef} alt="" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef word" />
      <h1 className='headtext__cormorant'>What We Believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content-quote'>
          <img src={images.quote} alt="quote" />

          <p className='p__opensans'>
            we Believe in giving the customers the best food
            and drinks experience. There's absolutely no place
            better than this, you can reach out to our top client
            and they will definitely confirm that what i said is
            very true.
          </p>
        </div>
      </div>

      <div className='app__chef-sign'>
        <p className='p__opensans'>Kelvin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
