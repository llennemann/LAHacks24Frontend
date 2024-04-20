// Rec.js
import React from 'react';
// API CALL HERE 
function Rec({ category }) {
  let content;
  switch (category) {
    case 'Transportation':
      content = ['Transportation1', 'Transportation2', 'Transportation3'];
      break;
    case 'Food':
      content = ['Food1', 'Food2', 'Food3'];
      break;
    case 'Sightseeing':
      content = ['Sightseeing1', 'Sightseeing2', 'Sightseeing3'];
      break;
    case 'Points of interest':
      content = ['Interest1', 'Interest2', 'Interest3'];
      break;
    default:
      content = ['Select a category'];
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {content.map((item, index) => (
        <div key={index} style={{ flex: 1, padding: 20, textAlign: 'center', border: '1px solid black' }}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Rec;

