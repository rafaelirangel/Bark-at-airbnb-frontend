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
    const location = useLocation()
    const { item } = location.state

    //state variable to  toggle the modal
    const [openModal, setOpenModal] = useState(false)
    const [openShowMoreModal, setOpenShowMoreModal] = useState(false)

    return (
        <div className='airbnbInfo'>

            {/* BANNER INFO */}
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

                {/* HOUSE INFO */}
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

                {/* HOST INFO */}
                <div className='host'>

                    <div className='hostInfo'>

                        <div className='hostImg'>
                            <img src={item.host_thumbnail_url} alt='hostImg' />
                        </div>


                        <div className='hostName'>
                            <h1>{`Hosted by ${item.host_name}`}</h1>
                            <h3>{`Joined in ${item.host_since}`}</h3>
                        </div>
                    </div>

                    <div className='hostInfoContent'>
                        <div className='aboutHost'>
                            <h3>{item.host_about}</h3>
                        </div>

                        <div className='hostResponse'>
                            <h1>Response rate: <span className='hostRes'>{item.host_response_rate}</span></h1>
                            <h1>Responde time: <span className='hostRes'>{item.host_response_time}</span></h1>
                        </div>

                        <div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>

                {/* DOG PARKS INFO */}
                <div className='dogParks'>
                    {item.dogParks.map((park, id) => (
                        <ParkCard
                            key={id}
                            name={park.Name}
                            neighborhood={park.neighborhood}
                            address={park.Address}
                            dogRunsType={park.DogRuns_Type}
                            accessible={park.Accessible}
                            notes={park.Notes}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AirbnbInfo
