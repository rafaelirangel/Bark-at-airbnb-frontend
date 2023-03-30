import React from "react";
import './Home.css';
import Card from "../components/Card";
import SubHeader from "../components/SubHeader";

const Home = ({ listingsData }) => {

    let houses = listingsData.map((item) => {
        return (
            <Card
                item={item}
                key={item.id}
            />
        )
    })

    return (
        <div className="home">

            <div className="subHeader">
                <SubHeader />
            </div>

            <div className="cards">
                <h3>{houses}</h3>
            </div>
        </div>
    )
}

export default Home


