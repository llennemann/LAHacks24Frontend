import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

function Schedule() {
  const { city } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle when the 'Done' button is clicked
  const handleDone = () => {
    navigate('/itinerary'); // Navigate to the Itinerary page
  };

  return (
    <div className='schedule-page'>
      <h1>Let's travel to {city}</h1>
      <Navbar/>
      <button className="button-spec" onClick={handleDone}>Done</button>  {/* Updated to handle navigation */}
    </div>
  );
}

export default Schedule;

