import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsList from '../pages/ProductsList';
import ProductDetails from '../components/ProductDetails';
import ErrorPage from '../components/ErrorPage';
      
function RouteProducts() {
  return (
    <>
       <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/:id" element={<ProductDetails/>} />
        <Route path="*" element={<ErrorPage/>} />
       </Routes>
    </>
  );
}

export default RouteProducts;