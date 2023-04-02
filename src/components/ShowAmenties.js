import React from "react";
import './ShowAmenties.css'

//Icons used on the page
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IronIcon from '@mui/icons-material/Iron';
import TvIcon from '@mui/icons-material/Tv';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BottleTwo, WaterRateTwo ,SoapBubble, HairDryer, Comb, AirConditioning, Alarm, Oven } from '@icon-park/react';
import RouterIcon from '@mui/icons-material/Router';
import PetsIcon from '@mui/icons-material/Pets';
import KeyIcon from '@mui/icons-material/Key';


//Amenties Modal Content
const ShowAmenties = ({ closeModal }) => {
    return (
        <div className="modalBackground" onClick={() => closeModal(false)} >

            <div className="modalContainer">
                <div className="closeBtn">
                    < button onClick={() => closeModal(false)}>X</button >
                </div>
                <h1>What this place offers</h1>

                <div className="scenicViews">
                    <h2>Scenic Views</h2>
                    <div className="content">
                        <LocalFloristIcon />
                        <p>Garden View</p>
                    </div>
                </div>

                <div className="bathroom">
                    <h2>Bathroom</h2>
                    <div className="content">
                        <BathtubIcon />
                        <p>Bathtub</p>
                    </div>
                    <div className="content">
                        <SoapBubble theme="outline" size="24" fill="#333" />
                        <p>Body Soap</p>
                    </div>
                    <div className="content">
                        <BottleTwo theme="outline" size="24" fill="#333" />
                        <p>Shampoo</p>
                    </div>
                    <div className="content">
                        <BottleTwo theme="outline" size="24" fill="#333" />
                        <p>Conditioner</p>
                    </div>
                    <div className="content">
                        <WaterRateTwo theme="outline" size="24" fill="#333" />
                        <p>Hot Water</p>
                    </div>
                    <div className="content">
                        <HairDryer theme="outline" size="24" fill="#333" />
                        <p>Hair Dryer</p>
                    </div>
                </div>

                <div className="bedroom&laundry">
                    <h2>Bedroom & Laundry</h2>
                    <div className="content">
                        <LocalLaundryServiceIcon />
                        <p>Washer Machine</p>
                    </div>
                    <div className="content">
                        <LocalLaundryServiceIcon />
                        <p>Dryer Machine</p>
                    </div>
                    <div className="content">
                        <Comb theme="outline" size="24" fill="#333" />
                        <p>Essentials</p>
                    </div>
                    <div className="content">
                        <CheckroomIcon />
                        <p>Hangers</p>
                    </div>
                    <div className="content">
                        <IronIcon />
                        <p>Iron</p>
                    </div>
                </div>

                <div className="entertainment">
                    <h2>Entertainment</h2>
                    <div className="content">
                        <RouterIcon />
                        <p>Ethernet Connection</p>
                    </div>
                    <div className="content">
                        <TvIcon />
                        <p>HDTV with Amazon Prime Video, Apple TV, Disney+, HBO Max, Hulu, Netflix</p>
                    </div>
                </div>

                <div className="heating&cooling">
                    <h2>Heating and cooling</h2>
                    <div className="content">
                        <AirConditioning theme="outline" size="24" fill="#333" />
                        <p>Air Conditioning</p>
                    </div>
                </div>

                <div className="Home safety">
                    <h2>Home safety</h2>
                    <div className="content">
                        <Alarm theme="outline" size="24" fill="#333" />
                        <p>Smoke alarm</p>
                    </div>
                    <div className="content">
                        <FireExtinguisherIcon />
                        <p>Fire extinguisher</p>
                    </div>
                    <div className="content">
                        <MedicalServicesIcon />
                        <p>First aid kit</p>
                    </div>
                </div>

                <div className="kitchen&dining">
                    <h2>Kitchen and dining</h2>
                    <div className="content">
                        <KitchenIcon />
                        <p>Refrigerator</p>
                    </div>
                    <div className="content">
                        <MicrowaveIcon />
                        <p>Microwave</p>
                    </div>
                    <div className="content">
                        <Oven />
                        <p>Oven</p>
                    </div>
                </div>


                <div className="parking">
                    <h2>Parking</h2>
                    <div className="content">
                        <DirectionsCarIcon />
                        <p>Free parking on premises</p>
                    </div>
                    <div className="content">
                        <DirectionsCarIcon />
                        <p>Free street parking</p>
                    </div>
                </div>

                <div className="Services">
                    <h2>Services </h2>
                    <div className="content">
                        <PetsIcon />
                        <p>Pets allowed</p>
                    </div>
                    <div className="content">
                        <CalendarMonthIcon />
                        <p>Long term stays allowed</p>
                    </div>
                    <div className="content">
                        < KeyIcon />
                        <p>Self check-in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowAmenties
