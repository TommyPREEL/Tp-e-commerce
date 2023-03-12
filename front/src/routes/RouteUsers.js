import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from '../components/Register';
import Login from '../components/Login';
import ErrorPage from '../components/ErrorPage';
      
function RouteProducts() {
  return (
    <>
       <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/connect" element={<Login/>} />
        <Route path="*" element={<ErrorPage/>} />
       </Routes>
    </>
  );
}

export default RouteProducts;