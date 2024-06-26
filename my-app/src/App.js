import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Itinerary from './components/pages/itinerary';
// import Itinerary from './components/pages/Itinerary';
// import dotenv from 'dotenv'
// dotenv.config()

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/schedule/:city" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule/:city" element={<Schedule />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
