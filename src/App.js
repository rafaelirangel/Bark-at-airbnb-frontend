import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/LogIn/LogIn';
import LogOut from './components/LogOut/LogOut';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Home, NotFound, Layout, ShowMore, AirbnbInfo, ShowAmenties } from './pages';
import axios from 'axios';

function App() {

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
  const [user] = useState({
    email: '',
    password: '',
    isLoggedIn: false  
  })
  async function handleRegister(e) {
    e.preventDefault()
    if(user.password === user.retypePassword){
      await axios.post("http://localhost:3001/users/register", {
        email: user.email,
        password: user.password
      })
      .then( res => {
        localStorage.token = res.data.token
        setUser({ isLoggedIn: true })
      })
      .catch(error => console.log(error))
    } else {
      console.log("user not found")
    }
  }
  async function handleLogIn(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }
  async function handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
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

    </div>
  );
}

export default App;

