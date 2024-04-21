import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import {useDispatch} from "react-redux";
import { getItineraryAction } from '../../actions/homeactions';
function Schedule() {
  const { city } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const dispatch=useDispatch();
  // Function to handle when the 'Done' button is clicked
  const handleDone = () => {
    //check is flight is not empty,stay_Selected, poi_Selected,foodselect
    let flight=JSON.parse(localStorage.getItem('flights')) //array
    let stays=JSON.parse(localStorage.getItem('stay_selected')) // single object
    let poi=JSON.parse(localStorage.getItem('poi_selected')) // array
    let food=JSON.parse(localStorage.getItem('food_select')) // array
    var data={"poi":poi,"flights":flight,"foods":food,"stay":stays}
    if(flight!==null && stays.length!==0 && poi.length!==0 && food.length!==0){
      console.log("hello")
      dispatch(getItineraryAction(data))
      navigate('/itinerary'); // Navigate to the Itinerary page
      }
  };

  return (
    <div className='schedule-page'>
      <h1 id="header-travel">Let's plan your travel to {city}</h1>
      <Navbar/>
      <button className="button-spec" id="done-button" onClick={handleDone}>Done</button>  {/* Updated to handle navigation */}
    </div>
  );
}

export default Schedule;

