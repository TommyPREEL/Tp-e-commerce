import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useNavigate, Link } from'react-router-dom';

function ProductsList({props}) {

    const [backendData, setBackendData] = useState({products:[]});

    useEffect(() => {
        fetch("products").then((response) => response.json()).then(
          data => {
            setBackendData(data);
          }
        )
      }, []);

  return (
    <div>
        {backendData.products.map(function(product, i){
        return <Link to={`/products/details/${product.id}`}><ProductCard key={i} props={product}></ProductCard></Link>
        })}
    </div>
  );
}
export default ProductsList;