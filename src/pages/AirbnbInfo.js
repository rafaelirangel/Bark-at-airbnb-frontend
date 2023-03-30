import { Link } from 'react-router-dom'
import ParkCard from '../components/ParkCard';
import './AirbnbInfo.css'
import ShowAmenties from '../components/ShowAmenties';
import ShowMore from '../components/ShowMore';
import { useState } from "react";
import { useParams, useLocation } from 'react-router-dom';

//Icons used on the page
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

const AirbnbInfo = () => {

    const { id } = useParams();
    // console.log(id)
    const location = useLocation()
    // console.log(location)
    const { item } = location.state
    console.log(item)

    //state variable to  toggle the modal
    const [openModal, setOpenModal] = useState(false)
    const [openShowMoreModal, setOpenShowMoreModal] = useState(false)

    return (
        <div className='airbnbInfo'>

            <div className='houseDescrip'>
                <h1>{item.name}</h1>

                <div className='feedback'>
                    <div className='info'>
                        <div className='iconInfo'>
                            <div className='paw'>
                                <PetsIcon />
                            </div>
                            <h2> {`${item.review_scores_rating} reviews `}</h2>
                        </div>

                        <div className='iconInfo'>
                            <ThumbUpAltIcon />
                            <h2>Superhost  </h2>
                        </div>
                        <div className='iconInfo'>
                            <div className='address'>
                                <h2>{item.street}</h2>
                            </div>
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
                <img src={item.xl_picture_url} alt='' />
            </div>

            <div className='mainContent'>

                <div className='houseInfo'>
                    <h2>{`Entire Chalet hosted by ${item.host_name}`}</h2>
                    <h3>{`${item.guests_included} guests · ${item.bedrooms} bedrooms · ${item.beds} beds · ${item.bathrooms} baths`}</h3>
                </div>

                <div className='instructions'>
                    <div className='iconInfo'>
                        <ImportantDevicesIcon />
                        <h4>Great for remote work</h4>
                    </div>
                    <h5>Fast wifi, plus a dedicated workspace in a common area.</h5>

                    <div className='iconInfo'>
                        <DoorFrontIcon />
                        <h4>Self check-in</h4>
                    </div>
                    <h5>Check yourself in with the lockbox.</h5>

                    <div className='iconInfo'>
                        <CalendarMonthIcon />
                        <h4>{`Cancellation policy: ${item.cancellation_policy}`}</h4>
                    </div>

                </div>

                <div className='about'>
                    <h1>{`${item.summary}`}</h1>
                    ...

                    <div className="showMore">
                        <button className="showMoreBtn" onClick={() => { setOpenShowMoreModal(true) }}>
                            Show More
                        </button>
                        {openShowMoreModal && <ShowMore closeShowMoreModal={setOpenShowMoreModal} />}
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
                        <button className="showAmentiesBtn" onClick={() => { setOpenModal(true) }}>
                            Show all amenties
                        </button>
                        {openModal && <ShowAmenties closeModal={setOpenModal} />}
                    </div>

                </div>

                <div className='location'>
                    
                    <h1> Where you'll be</h1>
                    <h2>{item.street}</h2>
                    

                    <div className='neighborhood'>
                        <h1>Neighborhood</h1>
                        <h3>{item.neighborhood_overview}</h3>
                    </div>

                    <div className='gettingAround'>
                        <h1>Getting Around</h1>
                        <h3>{item.transit}</h3>
                    </div>

                </div>

                {/* Add Host Info */}

                {/* {item.dogParks} */}

                {/* <div className='dogParks'>
                    <ParkCard
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                        title="Park Name"
                        reviews="Reviews"
                        // <DogIcon />
                        description="Description"
                        address="Address"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default AirbnbInfo
