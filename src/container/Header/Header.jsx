import React from 'react';
import {SubHeading} from '../../components';

import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>

      <SubHeading title='Chase the New Flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      
      <p className='p__opensans' style={{nargin: '2rem 0'}}>
        Grecht Restaurant is the best and modern Restaurant
        and have won multiple proven award across the globe,
        different categories of all type of foods and drinks.
      </p>
      <button type='Button' className='custom__button'
      style={{marginTop: '10px'}}> Explore Menu</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
