import React from "react";
import './Home.css';
import Card from "../components/Card";
import SubHeader from "../components/SubHeader";
// import { Search } from "@icon-park/react";
// import Search from "../components/SearchBar";

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



// const Home = ({ listingsData, searchResults }) => {

//     let houses = listingsData.map((item) => {
//         return (
//             <div key={item.id}>
//             <Card
//                 item={item}
//             />

//             {/* <Search item={item}/> */}
//             </div>
//         )
//     })

//     return (
//         <div className="home">

//             <div className="subHeader">
//                 <SubHeader />
//             </div>

//             <div className="cards">
//                 <h3>{houses}</h3>
//             </div>
//         </div>
//     )
// }

// export default Home

// const Home = ({ listingsData, searchResults }) => {

//     let houses = searchResults.map((item) => {
//         return (
//             <Card
//                 item={item}
//                 key={item.id}
//             />
//         )
//     })

//     const content = houses?.length ? houses : <article><p>No Matching Place</p></article>

//     return (
//         <div className="home">

//             <div className="subHeader">
//                 <SubHeader />
//             </div>

//             <div className="cards">
//                 {/* <h3>{houses}</h3> */}
//                 {content}
//             </div>
//         </div>
//     )
// }

// export default Home


