import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

// import Login from './components/Login';
// import Register from './components/Register';
// import ProductDetails from './components/ProductDetails';
// import CategoriesList from './components/CategoriesList';
import ProductsList from '../components/ProductsList';

import Home from '../components/Home';

import RouteUsers from './RouteUsers';
import RouteProducts from './RouteProducts';
import RouteCategories from './RouteCategories';

function RoutesIndex() {
  return (
    // <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/users/*" element={<RouteUsers/>} />
        <Route path="/products/*" element={<RouteProducts/>} />
        <Route path="/categories/*" element={<RouteCategories/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    // </Router>
  );
}

export default RoutesIndex;

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <ErrorPage/>,
//     },
//     {
//       path: "/users/connect",
//       element: <Login />,
//     },
//     {
//       path: "/users/register",
//       element: <Register />,
//     },
//     {
//       path: "/products",
//       element: <ProductsList />,
//     },
//     {
//       path: "/products/:id",
//       element: <ProductDetails/>,
//     },
//     {
//       path: "/categories",
//       element: <CategoriesList/>,
//     },
//     {
//       path: "/categories/:id/products",
//       element: <ProductsList/>,
//     },
//   ]);