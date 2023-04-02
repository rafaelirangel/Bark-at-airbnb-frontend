import React from 'react'
import './SubHeader.css'
import { links } from '../pages/assets/imgLinks';

//Header with imgs and names. Right now it's just an img. Want to add functionallity to each item in the future
function SubHeader() {
  return (
    <div className='subHeader'>
      {links.map((item, i) => (
        <div key={i} className='linksBox'>
          <img src={item.imgSrc} className='linksImg' alt={item.label} />
          <p className='linksLabel'>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default SubHeader;


