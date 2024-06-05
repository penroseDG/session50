// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './component/B1'
import Student from './component/B2'
import Account from './component/Account';
import PrivateRouter from './component/PrivateRouter';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/student/:name" element={<Student />} />
          <Route path="/student" element={<Student />} />
          <Routes>
        <Route path="/login" element={<Login setAuth={setIsAuth} />} />
        <Route path="/" element={<PrivateRouter isAuth={isAuth} />}>
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
    )
  }

export default App;
