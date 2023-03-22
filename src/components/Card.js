import React from 'react'
import './Card.css'

//Using props to get the card for the home page
function Card({src, title, description, date, price}) {
  return (
    <div className='card'>
        <img src={src} alt='' />
        <div className='cardInfo'>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h3>{date}</h3>
            <h3>{price}</h3>
        </div>
      
    </div>
  )
}

export default Card
