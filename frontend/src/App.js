import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import POS from './pages/POS/POS';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  const isAuthenticated = true; // TODO: Replace with actual auth check

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/products" 
            element={isAuthenticated ? <Products /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/products/create" 
            element={isAuthenticated ? <CreateProduct /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/pos" 
            element={isAuthenticated ? <POS /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
