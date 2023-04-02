import './App.css';
import {Home, NotFound, Layout, ShowMore, AirbnbInfo, ShowAmenties } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [listingsData, setListings] = useState([]);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState([])

  // Fetching data from the backend endpoint 
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await axios.get('http://localhost:3001/airbnb/'
        ); 
        setListings(result.data);
        setSearchResult(result.data)
      } catch (error) {
        setError(error)
      }
    };
    fetchListings()
  }, []);


  const [user, setUser] = useState({
        email: '',
        password: '',
        isLoggedIn: false
  })

  async function handleRegister(userInfo) {
    console.log(userInfo);
    console.log(user);
      await axios.post("http://localhost:3001/users/register", {
        email: userInfo.email,
        password: userInfo.password,
        headers: {
          'Content-Type': 'application/json' 
        }
      })
      .then((res) => {
        localStorage.token = res.data.token;
        setUser({ isLoggedIn: true });
        console.log("registered");
      })
      .catch((error) => console.log(error));
    }
  

  async function handleLogIn(userInfo) {
    console.log(userInfo)
    axios.post('http://localhost:3001/users/login', {
      email: userInfo.email,
      password: userInfo.password,
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    .then(response => {
      console.log(response)
      localStorage.token = response.data.token
      setUser({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  async function handleLogOut() {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  if (error) {
    return <div>Oops! There was an error: {error.message}</div>
  }

  //ROUTES
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout listingsData={listingsData} setSearchResult={setSearchResult} handleLogIn={handleLogIn} handleRegister={handleRegister} handleLogOut={handleLogOut}/>}>
          <Route path='*' element={<NotFound />} />
          <Route path='/showMore' element={<ShowMore />} />
          <Route path='/showAmenties' element={<ShowAmenties />} />
          <Route path='/airbnb/:id' element={<AirbnbInfo />} />
          <Route index path='/airbnb' element={<Home listingsData={listingsData} searchResult={searchResult}/>} />
          <Route path="/" element={<Navigate to="/airbnb" />} />
        </Route>        
      </Routes>
    </div>
  );
}

export default App;


