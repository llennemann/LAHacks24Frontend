import React from 'react';
import { useParams } from 'react-router-dom';
import Rec from '../Rec';
import Navbar from '../Navbar';

function Schedule() {
  const { city } = useParams();
  
  // call API here, return JSON data of recommendations

  return (
    <div>
      <h1>{city}</h1>
      <Navbar/>
      <div id="overall-rec-list">
        <div id="rec-list">
          <div>
            <h2>Food</h2>
          </div>
          <Rec/>
          <Rec/>
        </div>
        <div>
        <h2>Sightseeing</h2>
        </div>
        <div>
        <h2>Experiences</h2>
        </div>
      </div>
      <button>Done</button>
    </div>
  );
}

export default Schedule;
