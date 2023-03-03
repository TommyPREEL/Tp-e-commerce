// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useNavigate } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import RoutesIndex from './routes/index';
import ProductsList from './components/ProductsList';

import Home from './components/Home';
function App() {

  // const [user, setUser] = useState(null);
  // let navigate = useNavigate();
return(
  <div>
      {/* <Router> */}
        <Header/>
        <RoutesIndex />
      {/* </Router> */}
    {/* <RoutesIndex></RoutesIndex> */}
    {/* <Home></Home> */}
    {/* <Footer></Footer> */}
  </div>
)
}


//   <div className='App'>
//     {(typeof backendData.products === 'undefined') ? (
//       <p>Loading...</p>
//       ) : (
//     backendData.products.map((product) => {
//       <input type="text" placeholder={product}>tee</input>;
//     })
//     )}


export default App;
