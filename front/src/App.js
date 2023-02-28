import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

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
        // console.log(data);
        // testtest = data;
        setBackendData(data);
      }
    )
  }, []);




function handleClick(productId){
  console.log(productId);
}

return(
  <div className='App'>
    {/* {typeof(testtest.products) === null ? <h1>Loading</h1> : <h1>{testtest.products.description}</h1>} */}
    {backendData.products.map(function(product, i){
      return <a onClick={() => handleClick(product.id)}><ProductCard key={i} props={product}></ProductCard></a>
    })}
  </div>
)
}

//   const [backendData, setBackendData] = useState([]);

//   useEffect(() => {
//     fetch("products").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data);
//       }
//     )
//   }, []);

//   return (
//   //   <div className="App">
//   //     {(typeof backendData.products == 'undefined') ? (
//   //     <p>Loading...</p>
//   //     ) : (
//   //     <header className="App-header">
//   //       {console.log(backendData.products)}
//   //       {/* for(product of backendData.products){
//   //         <ProductCard product={product}></ProductCard>
//   //       } */}
//   //       {/* {backendData.products.map(function(product, i){
//   //       return <ProductCard product={product} key={i} />;
//   //   })} */}
//   //   {/* backendData.products.map((product, i) => {
//   //     <p key={i}>{product}</p>
//   //   })
//   //   <p>Hi !</p>
//   //   <p>{backendData}</p> */}
    
//   //     </header>
      
//   //     )}
//   //   </div>
//   // );

//   <div className='App'>
//     {(typeof backendData.products === 'undefined') ? (
//       <p>Loading...</p>
//       ) : (
//     backendData.products.map((product) => {
//       <input type="text" placeholder={product}>tee</input>;
//     })
//     )}
//     <p>{typeof backendData.products}</p>
//     <p>{backendData.products}</p>
//   </div>
//   )
// }
// const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <div className="App">
//      {
//        data && data.length>0 && data.map((item)=><p>{item.about}</p>)
//      }
//     </div>
//   );
// }

export default App;
