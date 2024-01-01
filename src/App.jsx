import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productdetails from './pages/Productdetails';


function App() {
  return (
    <Router>
      <Routes>
<Route path='/' element={<Productdetails />} />
      </Routes>
    </Router>
  );
}

export default App;
