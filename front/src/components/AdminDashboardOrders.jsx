import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { useNavigate, Link } from'react-router-dom';

function AdminDashboardOrders() {

    const [backendData, setBackendData] = useState({});

    

    useEffect(() => {
        fetch("orders").then((response) => response.json()).then(data => {
            setBackendData(data);
          }
        )
      }, []);

  return (
    <div>
        {backendData.map(function(category, i){
        // return <a onClick={() => handleClick(product.id)}><ProductCard key={i} props={product}></ProductCard></a>
          return <Link to={`/categories/${category.id}/products`}><CategoryCard key={i} props={category}></CategoryCard></Link>
        })}
    </div>
  );
}
export default AdminDashboardOrders;