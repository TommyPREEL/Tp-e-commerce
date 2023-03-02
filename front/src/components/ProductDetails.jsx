import React, { useEffect, useState } from 'react';
import { useNavigate } from'react-router-dom';
import { useParams } from "react-router-dom";

export default function ProductDetails() {

    const {id} = useParams();

    const [backendData, setBackendData] = useState({});

    useEffect(() => {
        fetch(`/products/details/${id}`).then((response) => response.json()).then(
          data => {
            console.log(data);
            
            setBackendData(data);
          }
        )
      }, []);

  return (
    <div>
        <p>{backendData.name}</p>
        <p>{backendData.description}</p>
        <p>{backendData.price}</p>
        <p>coucou</p>
        <p>{id}</p>
    </div>
  );
}