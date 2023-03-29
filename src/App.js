import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/LogIn/LogIn';
import LogOut from './components/LogOut/LogOut';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [user] = useState({
    email: '',
    password: '',
    isLoggedIn: false  
  })
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

  return (
    <div className="app">
          <Header />
          <Home />
          <Footer />
 
  
{/* Home  */}

    {/* Header */}

    {/* Banner */} 
      {/* Search */}

    {/* Cards */}

    {/* Footer */}

     
    {/* SearchPage */}  
       {/* ... */}

    </div>
  );
}

export default App;
