import React from "react";
import './Home.css';
import Card from "../components/Card";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";

// Use this comp to get the data for the Home page cards
const Home = (props) => {
 
    return (
        <div className="home">

            <div className="subHeader">
                <SubHeader />
            </div>

            <div className="cards">
           
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123" 
                    // <StarIcon />
                     description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"     
                 /> 
        
                 <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                /> 
            </div>

              <div className="cards">
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
            </div>

            <div className="cards">
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
            </div>

            <div className="cards">
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Madison, New Hampshire"
                    reviews="123"
                    description="Mountain and lake views"
                    date="Apr 9 – 14"
                    price="$ 400 night"
                />
            </div> 
        </div>
    )
}

export default Home 