import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ErrorPage from './components/ErrorPage';
// import ProductDetails from './components/ProductDetails';
// import CategoriesList from './components/CategoriesList';
// import ProductsList from './components/ProductsList';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: "/users/connect",
//     element: <Login />,
//   },
//   {
//     path: "/users/register",
//     element: <Register />,
//   },
//   {
//     path: "/products",
//     element: <ProductsList />,
//   },
//   {
//     path: "/products/:id",
//     element: <ProductDetails/>,
//   },
//   {
//     path: "/categories",
//     element: <CategoriesList/>,
//   },
//   {
//     path: "/categories/:id/products",
//     element: <ProductsList/>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
