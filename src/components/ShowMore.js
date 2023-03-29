import React from "react";
import './ShowMore.css'
import { useLocation } from 'react-router-dom';

const ShowMore = ({ closeShowMoreModal }) => {
    const location = useLocation()
    const { item } = location.state

    return (
        <div className="modalBackground" onClick={() => closeShowMoreModal(false)} >
            <div className="modalContainer">
                <div className="closeBtn">
                    < button onClick={() => closeShowMoreModal(false)}>X</button >
                </div>


                <div className="description">
                    <h1>About this space</h1>
                    <p>{item.summary}</p>
                    <p>{item.space}</p>
                </div>

                <div className="description">
                    <h2>The Space</h2>
                    <p>{item.description}</p>
                </div>

                <div className="description">
                    <h2>Guest access</h2>
                    <p>{item.access}</p>

                </div>

                <div className="description">
                    <h2>Other things note</h2>
                    <p>{item.notes}</p>
                </div>

                <div className="description">
                    <h2>House rules</h2>
                    <p>{item.house_rules}</p>
                </div>

                <div className="description">
                    <h2>Cancelation Policy</h2>
                    <p>{item.cancellation_policy}</p>
                </div>
            </div>
        </div>
    )
}


export default ShowMore


