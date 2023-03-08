import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from '../components/Register';
import Login from '../components/Login';

import Settings from '../pages/Settings';


function RouteProducts() {
  return (
    <>
       <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/connect" element={<Login/>} />
        <Route path="/settings" element={<Settings/>} />
        {/* <Route path="/orders" element={<Orders/>} /> */}
       </Routes>
    </>
  );
}

export default RouteProducts;