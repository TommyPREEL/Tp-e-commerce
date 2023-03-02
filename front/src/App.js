import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  const [user, setUser] = useState(null);

return(
  <div className='App'>
    <Header></Header>
    <Home></Home>
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
