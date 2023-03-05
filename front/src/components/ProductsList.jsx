import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useNavigate, Link, useLocation } from'react-router-dom';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function ProductsList({props}) {

  const { state } = useLocation();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  useEffect(() => {
    if (state?.showSnackbar) {
      setShowSnackbar(true);
      setSnackBarMessage(state.message);
      setTimeout(() => setShowSnackbar(false), 5000);
    }
  }, [state]);

  const [backendData, setBackendData] = useState({products:[]});

  useEffect(() => {
      fetch("/products").then((response) => response.json()).then(
        data => {
          setBackendData(data);
        }
      )
    }, []);

  return (
    <div>
      {showSnackbar && (
        <Snackbar open={true} autoHideDuration={3000}>
          <MuiAlert severity="success">{snackBarMessage}</MuiAlert>
        </Snackbar>
      )}
        {backendData.products.map(function(product, i){
        return <Link to={`/products/${product.id}`}><ProductCard key={i} props={product}></ProductCard></Link>
        })}
    </div>
  );
}
export default ProductsList;