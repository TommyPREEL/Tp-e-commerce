import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesList from '../components/CategoriesList';
// import CategoryCard from '../components/CategoryCard';

function RouteProducts() {
  return (
    <Routes>
        <Route path="/" element={<CategoriesList/>} />
        {/* <Route path="/:id" element={<CategoryCard/>} /> */}
    </Routes>
  );
}

export default RouteProducts;