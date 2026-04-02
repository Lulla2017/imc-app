import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/Css/App.css';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route> 
    </Routes>
  </Router>
);

export default AppRouter;