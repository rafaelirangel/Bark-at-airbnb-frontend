import React from 'react'
import './Card.css'
import PetsIcon from '@mui/icons-material/Pets';
import './ParkCard'


//Using props to get the card for the home page
const Card = ({ src, title, review, price }) => {

  return (
    <div className='card'>
      <img src={src} alt='' />

      <div className='cardInfo'>
        <div className='title' >
          <h2>{title}</h2>
          <div className='review'>
            <div className='paw'>
              <PetsIcon />
            </div>
            <h2>{review}</h2>
          </div>
        </div>
        <h4 className='date'>April 15 - 23 </h4>
        <h4 className='price'>{`$${price} night`}</h4>
      </div>

      
    </div>
  )
}

export default Card
