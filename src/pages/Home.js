import React from "react";
import './Home.css';
import Card from "../components/Card";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import PetsIcon from '@mui/icons-material/Pets';

const Home = ({ listingsData }) => {

    let houses = listingsData.map((item) => {
        return (
        <Link to={`/airbnb/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card
            key={item.id}
            src={item.xl_picture_url}
            title={item.street}
            review={item.review_scores_rating}
            price={item.price}
        />
        </Link>
        )
    })
    return (
        <div className="home">
            <div className="subHeader">
                <SubHeader />
            </div>

            <div className="cards">

                {/* <Link to={`/airbnb/${listingsData.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                    <h3>{houses}</h3>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Home

// const Home = ({ listingsData }) => {

//     return (
//         <div className="home">
//             <div className="subHeader">
//                 <SubHeader />
//             </div>

//             <div className='card'>

//                 {listingsData.map((item) => (
//                     <div key={item.id} >
//                         <Link to={`/airbnb/${item}}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                             <img src={item.xl_picture_url} alt='' />

//                             <div className='cardInfo'>
//                                 <div className='title' >
//                                   {item.street}
//                                     <div className='review'>
//                                         {item.review_scores_rating}
//                                         <div className='paw'>
//                                             <PetsIcon />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <h4 className='date'>April 15 - 23 </h4>
//                                 {`$${item.price} night`}
//                             </div>
//                         </Link>
//                     </div>

//                 ))}
                  
//             </div>
//         </div>
//     )
// }

// export default Home

