import React, { useState } from 'react';
import Rec from './Rec'; // Adjust the import path as necessary

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <div id="button-list">
        <button onClick={() => setSelectedCategory('Transportation')}>Transportation</button>
        <button onClick={() => setSelectedCategory('Food')}>Food</button>
        <button onClick={() => setSelectedCategory('Sightseeing')}>Sightseeing</button>
        <button onClick={() => setSelectedCategory('Points of interest')}>Points of interest</button>
      </div>
      <Rec category={selectedCategory} />
    </div>
  );
}

export default Navbar;
