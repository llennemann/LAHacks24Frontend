import React, { useState } from 'react';
import Rec from './Rec'; // Adjust the import path as necessary
import Transport from './Transport';
import Food from './Food';
import Poi from './Poi';
import Stays from './Stays';

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState('');

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

  return (
    <div>
      <div id="button-list">
        <button onClick={() => setSelectedCategory('Stays')}>Stays</button>
        <button onClick={() => setSelectedCategory('Transportation')}>Transportation</button>
        <button onClick={() => setSelectedCategory('Food')}>Food</button>
        <button onClick={() => setSelectedCategory('Points of interest')}>Points of interest</button>
      </div>
      {renderComponent()}
      {/* <Rec category={selectedCategory} /> */}
    </div>
  );
}

export default Navbar;

