import React from "react";
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className="notFoundContent">
                <h1 className="pageNotFound">SORRY</h1>
                <h2>we couldn't find that page</h2>
                <Link to="/airbnb">
                    <button className="notFoundBtn">Try searching or go to the main page.</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound