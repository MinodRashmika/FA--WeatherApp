import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import {WeatherCard, MultiCardUI} from './pages/index.jsx'


function App() {

  //const url = `process.env.URL`

  return (
  <BrowserRouter>

    {/* <div>
      <Link to="/single">Weather Card</Link>
      <Link to="/">Multi Card</Link>
    </div> */}

    <Routes>
      <Route path = "/" element={<MultiCardUI/>}/>
      <Route path = "/single" element={<WeatherCard/>}/>
    </Routes>

  </BrowserRouter>
  );
}

export default App;
