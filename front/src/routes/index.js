import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ErrorPage from '../components/ErrorPage';
// import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import Settings from '../pages/Settings';
import AccessDenied from '../pages/AccessDenied';

import RouteUsers from './RouteUsers';
import RouteProducts from './RouteProducts';
import RouteCategories from './RouteCategories';
import RouteAdmin from './RouteAdmin';

function RoutesIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<RouteProducts/>} /> {/* Home */}
      <Route path="/users/*" element={<RouteUsers/>} />
      <Route path="/products/*" element={<RouteProducts/>} />
      <Route path="/categories/*" element={<RouteCategories/>} />
      <Route path="/admin/*" element={<RouteAdmin/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/access_denied" element={<AccessDenied/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default RoutesIndex;