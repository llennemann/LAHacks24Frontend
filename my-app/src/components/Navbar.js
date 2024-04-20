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
  // we need to make variables and reduers for the transportaion, food,stays
  const renderComponent = () => {
    switch (selectedCategory) {
        case 'Transportation':
          return <Transport />;
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

    const getData=(category)=>{
      switch (selectedCategory) {
        case 'Transportation':
          dispatch(getTransportAction())
          return 1;
        case 'Food':
          dispatch(getFoodAction())
          return 1;
        case 'Stays':
          dispatch(getStaysAction())
          return 1;
        case 'Points of interest':
          dispatch(getPOIAction())
          return 1;
        default:
          return 0;
      }
  }

  return (
    <div>
      <div id="button-list">
        <button onClick={() => {setSelectedCategory('Transportation');getData('Transport')}}>Transportation</button>
        <button onClick={() => {setSelectedCategory('Stays');getData('Stays')}}>Stays</button>
        <button onClick={() => {setSelectedCategory('Points of interest');getData('POI')}}>Points of interest</button>
        <button onClick={() => {setSelectedCategory('Food');getData('Food')}}>Food</button>
      </div>
      {renderComponent()}
      {/* <Rec category={selectedCategory} /> */}
    </div>
  );
}

export default Navbar;

