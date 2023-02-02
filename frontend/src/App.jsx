import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import {WeatherCard, MultiCardUI} from './pages/index.jsx'


function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=f80449f90f34ca2091a328118b50dcd4`

  return (
  <BrowserRouter>

    <div>
      <Link to="/single">Weather Card</Link>
      <Link to="/">Multi Card</Link>
    </div>

    <Routes>
      <Route path = "/" element={<MultiCardUI/>}/>
      <Route path = "/single" element={<WeatherCard/>}/>
    </Routes>

  </BrowserRouter>
  );
}

export default App;
