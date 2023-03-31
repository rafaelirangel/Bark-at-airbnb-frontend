import React from "react";
import './Home.css';
import Card from "../components/Card";
import SubHeader from "../components/SubHeader";
import Dog from '../img/cute-dog-doggy.gif'

//MAPPING THROUGH THE WHOLE DATA OBJECT AND PASSING IT THROUGH THE CARD COMPONENT AS A PROPS.
const Home = ({ listingsData, searchResult }) => {

    let houses = searchResult.map((item) => {
        return (
            <Card
                item={item}
                key={item.id}
            />
        )
    })

    const content = houses?.length ? houses :
        <div className='noResults'>
            <article className='noContent'>
                <p className='noMatching'>No matching results</p>
                <img src={Dog} alt='dog gif' />
            </article>
        </div>


    return (
        <div className="home">

            <div className="subHeader">
                <SubHeader />
            </div>

            <div className="cards">
                <h3>{content}</h3>
            </div>

        </div>
    )
}

export default Home

