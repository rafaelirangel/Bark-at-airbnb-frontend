import './App.css';
import {Home, NotFound, Layout, ShowMore, AirbnbInfo, ShowAmenties } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=dog+friendly&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&refine.country=United+States&refine.city=New+York
  const [listingsData, setListings] = useState([]);
  const [error, setError] = useState(null);

  // Fetching data from the backend endpoint 
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await axios.get('http://localhost:3001/airbnb'
        ); 
        console.log(result)
        setListings(result.data);
        // console.log(result.data.records)
      } catch (error) {
        setError(error)
      }
    };
    fetchListings()
  }, []);

  if (error) {
    return <div>Oops! There was an error: {error.message}</div>
  }

  return (
    <div className='app'>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='*' element={<NotFound />} />
          <Route path='/showMore' element={<ShowMore />} />
          <Route path='/showAmenties' element={<ShowAmenties />} />
          <Route path='/airbnbInfo' element={<AirbnbInfo />} />
          <Route index path='/' element={<Home listingsData={listingsData} />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

