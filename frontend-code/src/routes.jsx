import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MLAnalytics } from './pages/MLAnalytics';
import { Analysis } from './pages/Analysis';
import { Home } from './pages/Home.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route for the root path */}
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/MLAnalytics" element={<MLAnalytics />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
