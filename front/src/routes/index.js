import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import ErrorPage from '../components/ErrorPage';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

import RouteUsers from './RouteUsers';
import RouteProducts from './RouteProducts';
import RouteCategories from './RouteCategories';
import RouteAdmin from './RouteAdmin';

function RoutesIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/users/*" element={<RouteUsers/>} />
      <Route path="/products/*" element={<RouteProducts/>} />
      <Route path="/categories/*" element={<RouteCategories/>} />
      <Route path="/admin/*" element={<RouteAdmin/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default RoutesIndex;