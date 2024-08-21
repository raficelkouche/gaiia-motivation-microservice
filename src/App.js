// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MotivationListPage from './components/MotivationListPage';
import MotivationDetailPage from './components/MotivationDetailPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/motivation-list" element={<MotivationListPage />} />
          <Route path="/motivation/:theme" element={<MotivationDetailPage />} />
        </Routes>
      </Router>
  );
}

export default App;
