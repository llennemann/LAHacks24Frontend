import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/:city" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
