import React, { useState } from 'react';
// import Rec from './Rec'; // Adjust the import path as necessary
import Transport from './Transport';
import Food from './Food';
import Poi from './Poi';
import Stays from './Stays';
import {useDispatch} from 'react-redux';
import { getFoodAction, getPOIAction, getStaysAction, getTransportAction } from '../actions/homeactions';

// transportation->Stays->poi's->food.
function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch=useDispatch();
  var formfields=localStorage.getItem('formfields')?JSON.parse(localStorage.getItem('formfields')):{}
  var pathname=window.location.pathname;
  pathname=pathname.split('/')[2]
  var transportData={destination:pathname,...formfields}
  let flight=JSON.parse(localStorage.getItem('flights'))
 
  

  const renderComponent = () => {
    switch (selectedCategory) {
        case 'Transportation':
          return <Transport/>;
        case 'Food':
          return <Food />;
        case 'Stays':
          return <Stays />;
        case 'Points of interest':
          return <Poi />;
        default:
          return <p>Select a category</p>; // Render nothing if no category is selected
      }
  };

    const getData=(category,data)=>{
      switch (category) {
        case 'Transportation':
          dispatch(getTransportAction(data))
          return 1;
        case 'Food':
          dispatch(getFoodAction(data))
          return 1;
        case 'Stays':
          dispatch(getStaysAction(data))
          return 1;
        case 'Points of interest':
          dispatch(getPOIAction(data))
          return 1;
        default:
          return 0;
      }
  }

  return (
    <div>
      <div id="button-list">
        <button className="button-spec" onClick={() => {getData('Transportation',transportData);setSelectedCategory('Transportation');}}>Transportation</button>
        <button className="button-spec" onClick={() => {getData('Points of interest',transportData);setSelectedCategory('Points of interest');}}>Points of interest</button>
        <button className="button-spec" onClick={() => {getData('Stays',{
    "arrival_airport":flight["inbound"]["arrival_airport_code"],
    'startDate':formfields.startDate,
    'endDate':formfields.endDate
  });setSelectedCategory('Stays');}}>Stays</button>
        <button className="button-spec" onClick={() => {getData('Food',{"loc":formfields.loc,});setSelectedCategory('Food');}}>Food</button>
      </div>
      {renderComponent()}
      {/* <Rec category={selectedCategory} /> */}
    </div>
  );
}

export default Navbar;

