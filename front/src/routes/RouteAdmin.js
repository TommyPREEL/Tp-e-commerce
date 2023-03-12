import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsList from '../pages/ProductsList';
import ProductDetails from '../components/ProductDetails';
import AdminDashboard from '../pages/AdminDashboard';

function RouteAdmin() {
  return (
    <>
       <Routes>
        <Route path="/" element={<AdminDashboard/>} />
        {/* <Route path="/:id" element={<ProductDetails/>} /> */}
       </Routes>
    </>
  );
}

export default RouteAdmin;