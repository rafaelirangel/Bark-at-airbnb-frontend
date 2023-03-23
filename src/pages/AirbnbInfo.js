
import { Link } from 'react-router-dom'

const AirbnbInfo = () => {
    return (
        <div className='airbnbInfo'>
            <div className='banner'>
                <img src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"></img>

                {/* A comment about the place */}
                {/* Star Icon, Reviews, ! Icon Superhost . Location, Share Icon and Share, Dog Icon Save */}
                {/* A pic or more?    */}
            </div>

            <div className='houseInfo'>
                <h2>Entire Chalet hosted by Ramya</h2>
                <h3>Num of guest, bedrooms, beds, baths</h3>
            </div>

            <div className='instructions'>
                <h2>Great for remote work</h2>
                <h3>Self check-in</h3>
                <h3>Free cancellation for 48 hours.</h3>
                {/* Insert icons */}
            </div>

            <div className='about'>
            <h1>short description the place</h1>
            <h1>Learn more btn</h1>
            </div>

            <div className='amenities'>
            <h1> Amenities</h1>
                {/* Insert icons */}

            </div>


            <div className='reviews'>
                <h1>reviews</h1>

            </div>

            <div className='dogParks'>
                <h1>Show dogParks</h1>
            </div>

            <div className='thingsToKnow'>
                <h1>thingsToKnow</h1>

            </div>



            <Link to="/">
            </Link>




        
        </div>
    )
}

export default AirbnbInfo
