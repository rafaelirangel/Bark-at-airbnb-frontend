import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='*' element={<NotFound />} />
          <Route index path='/' element={<Home />} />
        </Route>  
      </Routes>
    </div>
  );
}

export default App;

