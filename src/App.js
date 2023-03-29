import './App.css';
import {Home, NotFound, Layout, ShowMore, AirbnbInfo, ShowAmenties } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';


function App() {

  const [listingsData, setListings] = useState([]);
  const [error, setError] = useState(null);
  // const [searchResults, setSearchResults] = useState([])


  // Fetching data from the backend endpoint 
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await axios.get('http://localhost:3001/airbnb'
        ); 
        console.log(result)
        setListings(result.data);
        // setSearchResults(result.data)
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
          <Route path='/airbnb/:id' element={<AirbnbInfo />} />
          <Route index path='/airbnb' element={<Home listingsData={listingsData} />} />
        </Route>        
      </Routes>
      {/* <SearchBar listingsData={listingsData} setSearchResults={searchResults} /> */}
    </div>
  );
}

export default App;

