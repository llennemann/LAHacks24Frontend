import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

function Schedule() {
  const { city } = useParams();
  
  // call API here, return JSON data of recommendations

  return (
    <div className="whole-page">
      <h1>Let's travel to {city}</h1>
      <Navbar/>
      <button className="button-spec">Done</button>
    </div>
  );
}

export default Schedule;
