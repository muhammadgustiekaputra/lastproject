import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Intro from './components/Intro';
import Register from './components/Register';
import CreateNewFood from './components/CreateNewFood';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createnewfood" element={<CreateNewFood />} />

      </Routes>
    </Router>
  );
}

export default App;
