import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsList from '../components/ProductsList';
import ProductDetails from '../components/ProductDetails';

function RouteProducts() {
  return (
    <>
       <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/:id" element={<ProductDetails/>} />
       </Routes>
    </>
  );
}

export default RouteProducts;