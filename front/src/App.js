import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';

function App() {
  const [backendData, setBackendData] = useState({products:[]});

  // useEffect(() => {
  //   fetch("products").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data);
  //     }
  //   )
  // }, []);

  let testtest = null;

  useEffect(() => {
    fetch("products").then((response) => response.json()).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);


function handleClick(productId){
  console.log(productId);
}

return(
  <div className='App'>
    <Header></Header>

    {backendData.products.map(function(product, i){
      return <a onClick={() => handleClick(product.id)}><ProductCard key={i} props={product}></ProductCard></a>
    })}
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
