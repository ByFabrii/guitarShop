// import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from "./Pages/Store";
import HomePage from './Pages/HomePage';
import Confirmation from './Pages/ConfirmationPage';

export default function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}
