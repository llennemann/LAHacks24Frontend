import React from 'react';
import { useParams } from 'react-router-dom';

function Schedule() {
  const { city } = useParams();

  return (
    <div>
      <h1>{city}</h1>
    </div>
  );
}

export default Schedule;
