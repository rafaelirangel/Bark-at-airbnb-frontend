import './App.css';
import {Home, NotFound, Layout, ShowMore, AirbnbInfo, ShowAmenties } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [listingsData, setListings] = useState([]);
  const [error, setError] = useState(null);

  // Fetching data from the backend endpoint 
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await axios.get('http://localhost:3001/airbnb/'
        ); 
        console.log(result)
        setListings(result.data);
      } catch (error) {
        setError(error)
      }
    };
    fetchListings()
  }, []);

  if (error) {
    return <div>Oops! There was an error: {error.message}</div>
  }

  //ROUTES
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout listingsData={listingsData} />}>
          <Route path='*' element={<NotFound />} />
          <Route path='/showMore' element={<ShowMore />} />
          <Route path='/showAmenties' element={<ShowAmenties />} />
          <Route path='/airbnb/:id' element={<AirbnbInfo />} />
          <Route index path='/airbnb' element={<Home listingsData={listingsData} />} />
          <Route path="/" element={<Navigate to="/airbnb" />} />
        </Route>        
      </Routes>
    </div>
  );
}

export default App;

