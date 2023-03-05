import React, { useEffect, useState } from 'react';
import { useNavigate } from'react-router-dom';
import { useParams } from "react-router-dom";
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";

function ProductDetails() {

  const {id} = useParams();

  const [backendData, setBackendData] = useState({});

  const [quant, setQuant] = useState(1);

  const [orderedQuant, setOrderedQuant] = useState(0);
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
      fetch(`/products/details/${id}`).then((response) => response.json()).then(
        data => {
          setBackendData(data);
          setTotal(Number(data.price) * quant);
        }
      )
    }, []);

  useEffect(() => {
    setTotal(quant * backendData.price);
  }, [quant, backendData.price]);

  const addQuant = () => {
    setQuant(current => current + 1);
    
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    // setQuant(1);
    // setOrderedQuant(0);
    // setTotal(0);
    // localStorage.removeItem('cart');
    localStorage.removeItem('cart')
  };

  const navigate = useNavigate();
  function handleClickAddToCart() {
    const items = {
      id: backendData.id,
      name: backendData.name,
      price: backendData.price,
      quantity: quant,
      total: total,
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[items.id] = items;
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/products', { state: { showSnackbar: true, message: `${items.quantity} ${items.name} added to the cart` }});
  }

  function handleClickCheckCart(){
    console.log(JSON.parse(localStorage.getItem("cart")));
  }


  return (
    <section className="description">
      <h1>{backendData.name}</h1>
      <p className="desc">
        {backendData.description}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>$ {backendData.price}</p>
          Total : <p>$ {total}</p>
        </div>
      </div>
      <div className="buttons">
      <div className="amount">
      <button className="minus" onClick={removeQuant} disabled={quant === 0}>
        <img src={minus} alt="icon-minus" />
      </button>
      <p>{quant}</p>
      <button className="plus" onClick={addQuant} disabled={quant === backendData.quantity}>
        <img src={plus} alt="icon-plus" />
      </button>
    </div>
        <button
          className="add-to-cart"
          onClick={handleClickAddToCart}
        >
          {/* <CartIcon /> */}
          add to cart
        </button>
      </div>
      <button onClick={resetQuant}>RESET</button>
      <button onClick={handleClickCheckCart}>CHECK</button>
    </section>
    
  );
}
export default ProductDetails;