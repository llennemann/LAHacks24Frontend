import React from 'react';
import { useParams } from 'react-router-dom';
import Rec from '../Rec';
import Navbar from '../Navbar';

function Schedule() {
  const { city } = useParams();
  
  // call API here, return JSON data of recommendations

  return (
    <div>
      <h1>Add details for your trip to {city}!</h1>
      <Navbar/>
      <button>Done</button>
    </div>
  );
}

export default Schedule;
