import React from 'react';
import './ParkCard.css'
import { Dog, Tree } from '@icon-park/react';

//DOG PARK 
const ParkCard = ({ name, neighborhood, dogRunsType, accessible, notes, address }) => {

    return (
        <div className='parkCard'>
            <div className='parkCardInfo'>
                <h4 className='dogIcon'> <Dog theme="two-tone" size="60" fill={['#333', '#FF5A5F']} /> </h4>
                <h4> <Tree theme="filled" size="60" fill="#5aa00a" /> </h4>
            </div>

            <div className='parkName'>
                <h1>{name}</h1>
            </div>

            <div className='parkNeighborhood'>
                <h3>{neighborhood}</h3>
            </div>

            <div className='parkAddress'>
                <h3>{address}</h3>
            </div>

            <div className='dogRunsType'>
                <h3>Park Type: <br /> <span className='runType'>{`${dogRunsType}`}</span></h3>
            </div>

            <div className='parkNotes'>
                <h3><span className='note'>Note: </span> <br />{notes}</h3>
            </div>

        </div>
    )
}

export default ParkCard