import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { useNavigate, Link } from'react-router-dom';

function CategoriesList() {

    const [backendData, setBackendData] = useState({categories:[]});

    useEffect(() => {
        fetch("categories").then((response) => response.json()).then(
          data => {
            setBackendData(data);
          }
        )
      }, []);

  return (
    <div>
        {backendData.categories.map(function(category, i){
        // return <a onClick={() => handleClick(product.id)}><ProductCard key={i} props={product}></ProductCard></a>
        return <Link to={`/categories/${category.id}/products`}><CategoryCard key={i} props={category}></CategoryCard></Link>
        })}
    </div>
  );
}
export default CategoriesList;