import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
