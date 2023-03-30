import React from 'react';
import './ParkCard.css'
import PetsIcon from '@mui/icons-material/Pets';

//Using props to get the card for the home page
const ParkCard = ({ src, title, reviews, description, address }) => {
    return (
        <div className='parkCard'>
            <img src={src} alt='' />
            <div className='parkCardInfo'>
                <h2>{title}</h2>

                <div className='iconInfo'>
                    <PetsIcon />
                    <h3 >{reviews}</h3>
                </div>
              
                <h3>{description}</h3>
                <h3>{address}</h3>
            </div>
        </div>
    )
}

export default ParkCard