import React, { useState } from 'react';
import Rec from './Rec'; // Adjust the import path as necessary
import Transport from './Transport';
import Food from './Food';

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const renderComponent = () => {
    switch (selectedCategory) {
        case 'Transportation':
          return <Transport />;
        case 'Food':
          return <Food />;
        case 'Sightseeing':
          return <Transport />;
        case 'Points of interest':
          return <Transport />;
        default:
          return <p>Select a category</p>; // Render nothing if no category is selected
      }
  };

  return (
    <div>
      <div id="button-list">
        <button onClick={() => setSelectedCategory('Transportation')}>Transportation</button>
        <button onClick={() => setSelectedCategory('Food')}>Food</button>
        <button onClick={() => setSelectedCategory('Sightseeing')}>Sightseeing</button>
        <button onClick={() => setSelectedCategory('Points of interest')}>Points of interest</button>
      </div>
      {renderComponent()}
      {/* <Rec category={selectedCategory} /> */}
    </div>
  );
}

export default Navbar;
