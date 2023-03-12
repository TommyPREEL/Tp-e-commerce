import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesList from '../components/CategoriesList';
// import CategoryCard from '../components/CategoryCard';
import ErrorPage from '../components/ErrorPage';
      
function RouteProducts() {
  return (
    <Routes>
        <Route path="/" element={<CategoriesList/>} />
        {/* <Route path="/:id" element={<CategoryCard/>} /> */}
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default RouteProducts;