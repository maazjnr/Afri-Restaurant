import React from 'react';
import './SpecialMenu.css';

import { SubHeading, MenuItem } from '../../components';

import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorants'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-Menu'>
      <div className='app__specialMenu-menu_wine flex__center' >
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, beer) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>
    </div>

  </div>
);

export default SpecialMenu;
