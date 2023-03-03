import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from '../components/Register';
import Login from '../components/Login';

function RouteProducts() {
  return (
    <>
       <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/connect" element={<Login/>} />
       </Routes>
    </>
  );
}

export default RouteProducts;