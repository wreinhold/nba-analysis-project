import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MLAnalytics from './pages/MLAnalytics.jsx';
import Analysis from './pages/Analysis';
import Home from './pages/Home.jsx';
import ResponsiveAppBar from './assets/AppBar';

const AppRoutes = () => {
  return (
    <Router>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/mlanalytics" element={<MLAnalytics />} />
    </Routes>
  </Router>
  );
};

export default AppRoutes;