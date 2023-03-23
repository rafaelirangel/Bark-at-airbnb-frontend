import { Link } from 'react-router-dom'
import ParkCard from '../components/ParkCard';
import './AirbnbInfo.css'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WavesIcon from '@mui/icons-material/Waves';
import TerrainIcon from '@mui/icons-material/Terrain';
import CountertopsIcon from '@mui/icons-material/Countertops';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import PetsIcon from '@mui/icons-material/Pets';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteIcon from '@mui/icons-material/Favorite';



const AirbnbInfo = (props) => {
    return (
        <div className='airbnbInfo'>

            <div className='houseDescrip'>
                <h1>Breathtaking Views in Conway- Hidden gem!</h1>

                <div className='feedback'>
                    <div className='info'>
                        <div className='iconInfo'>
                            <PetsIcon />
                            <h2> 5.0 · reviews ·</h2>
                        </div>
                        <div className='iconInfo'>
                            <ThumbUpAltIcon />
                            <h2> Superhost ·</h2>
                        </div>
                        <div className='iconInfo'>
                            <h2>Address</h2>
                        </div>
                    </div>

                    <div className='shareInfo'>
                        <div className='iconInfo'>
                            <IosShareIcon />
                            <h2>Share</h2>
                        </div>

                        <div className='iconInfo'>
                            <FavoriteIcon />
                            <h2>Save</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div className='banner'>
                <img src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"></img>
            </div>

            <div className='mainContent'>

                <div className='houseInfo'>
                    <h2>Entire Chalet hosted by Ramya</h2>
                    <h3>10 guests · 4 bedrooms · 6 beds · 2.5 baths</h3>
                </div>

                <div className='instructions'>
                    <div className='iconInfo'>
                        <ImportantDevicesIcon />
                        <h4>Great for remote work</h4>
                    </div>
                    <h5>Fast wifi at 540 Mbps, plus a dedicated workspace in a common area.</h5>


                    <div className='iconInfo'>
                        <DoorFrontIcon />
                        <h4>Self check-in</h4>
                    </div>
                    <h5>Check yourself in with the lockbox.</h5>

                    <div className='iconInfo'>
                        <CalendarMonthIcon />
                        <h4>Free cancellation for 48 hours.</h4>
                    </div>

                </div>

                <div className='about'>
                    <h1>Chalet in the Clouds!</h1>
                    <p> Relax & Rejuvenate w/ panoramic views of White Mountains from any of the 4 decks of Kailaśa Chalet!  Perched on top of a mountain overlooking Mt Chocorua & Silver Lake w/ majestic views of Mt Washington Valley. So easy to get lost in the beauty of Kailaśa!</p><br />
                    ...
                    <div className="showMore">
                        <Link to="/showMore">
                            <button className="showMoreBtn">
                                Show More
                            </button>
                        </Link>
                        <KeyboardArrowRightIcon />
                    </div>

                </div>

                <div className='amenities'>
                    <h2> What this place offers</h2>
                    <div className='iconInfo'>
                        <WavesIcon />
                        <h4>Lake view</h4>
                    </div>

                    <div className='iconInfo'>
                        <TerrainIcon />
                        <h4>Mountain view</h4>
                    </div>

                    <div className='iconInfo'>
                        <CountertopsIcon />
                        <h4>Kitchen</h4>
                    </div>

                    <div className='iconInfo'>
                        <SignalWifiStatusbar4BarIcon />
                        <h4>Fast wifi – 540 Mbps</h4>
                    </div>

                    <div className='iconInfo'>
                        <ImportantDevicesIcon />
                        <h4>Dedicated workspace</h4>
                    </div>

                    <div className="showAmenties">
                        <Link to="/showAmenties">
                            <button className="showAmentiesBtn">
                                Show all amenties
                            </button>
                        </Link>

                    </div>
                </div>

                <div className='reviews'>
                    <div className='iconInfo'>
                        <PetsIcon />
                        <h2> 5.0 · reviews</h2>
                    </div>

                    <div className="showAmenties">
                        <Link to="/showAmenties">
                            <button className="showAmentiesBtn">
                                Show all reviews
                            </button>
                        </Link>

                    </div>
                </div>

                <div className='dogParks'>
                    <ParkCard
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                        title="Park Name"
                        reviews="Reviews"
                        // <DogIcon />
                        description="Description"
                        address="Address"
                    />
                </div>
            </div>
        </div>
    )
}

export default AirbnbInfo
