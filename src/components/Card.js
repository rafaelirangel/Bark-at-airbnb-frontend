import React from 'react'
import './Card.css'
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";
import Layout from './Layout';

const Card = ({ item }) => {

  return (

    <div className='card'>

      <Link to={`/airbnb/${item._id}`}
        state={{ item: item }}
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>

        <img src={item.xl_picture_url} alt='' />

        <div className='cardInfo'>
          <div className='title' >
            <h2>{item.street}</h2>
            {/* <h2>{item.neighbourhood}</h2> */}
            <div className='review'>
              <div className='paw'>
                <PetsIcon />
              </div>
              <h2>{item.review_scores_rating}</h2>
            </div>
          </div>
          <h4 className='date'>April 15 - 23 </h4>
          <h4 className='price'>{`$${item.price} night`}</h4>
        </div>
      </Link>

    </div>
  )
}

export default Card
