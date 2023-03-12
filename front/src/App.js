// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useNavigate } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import RoutesIndex from './routes/index';


import ProjectContext from './context/ProjectContext';

import Home from './pages/Home';
function App() {


  // const [user, setUser] = useState(null);
  // let navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userCart, setUserCart] = useState(null);

return(
  <div>
      {/* <Router> */}
      <ProjectContext.Provider value={{user, setUser,userCart, setUserCart}}>
        <Header/>
        <RoutesIndex />
      </ProjectContext.Provider>
        
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
