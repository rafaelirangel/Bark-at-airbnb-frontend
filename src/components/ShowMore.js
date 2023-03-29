import React from "react";
import { useParams, useLocation } from 'react-router-dom';


const ShowMore = ({ closeModal }) => {

    
    // const { id } = useParams();
    // console.log(id)
    // const location = useLocation()
    // console.log(location)
    // const { item } = location.state
    return (
        <div className="modalBackground" onClick={() => closeModal(false)} >

            <div className="modalContainer">
                <div className="closeBtn">
                    < button onClick={() => closeModal(false)}>X</button >
                </div>
                <h1>About this space</h1>

                {/* <p>{item.summary}</p> */}
                <div className="scenicViews">
                    {/* Summary
                        summary
                    
                    The Space
                        space

                    Description
                        description   

                    Transit
                        transit    


                    Guest access
                        access



                    
                    */}
                    <h2>Scenic Views</h2>
                    <div className="content">
                        <p>Garden View</p>
                    </div>
                </div>

                <div className="bathroom">
                    <h2>Bathroom</h2>
                    <div className="content">
                        <p>Bathtub</p>
                    </div>
                    <div className="content">
                        <p>Body Soap</p>
                    </div>
                    <div className="content">
                        <p>Shampoo</p>
                    </div>
                    <div className="content">
                        <p>Conditioner</p>
                    </div>
                    <div className="content">
                        <p>Hot Water</p>
                    </div>
                    <div className="content">
                        <p>Hair Dryer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ShowMore

// summary, cancellation_policy, description, notes, transit, access