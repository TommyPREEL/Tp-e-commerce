import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from'react-router-dom';
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";
import Button from '@mui/material/Button';
// import Title from './Title';

export default function Cart() {

  let navigate = useNavigate();

  const [totalPrice, setTotalPrice] = React.useState(0);

  const [products, setProducts] = React.useState([])
  
  function preventDefault(event) {
    event.preventDefault();
    console.log(products)
  }

  React.useEffect(() => {
    const rows = JSON.parse(localStorage.getItem("cart"))
    const arr = Object.values(rows).map(item => {
      setTotalPrice(Number(totalPrice) + Number(item.total))
      console.log(totalPrice)
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.total,
      };
    });
    setProducts(arr);
  }, [])
  
  function handleClickConnection() {
    navigate('/users/connect')
  }
  function handleClickOrder() {
    // fetch('/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(inputs)

    // })
    // .then(response => response.json())
    // .then(dataBack => {
    //   // stocker data dans le localStorage ?
    //   localStorage.setItem('user', JSON.stringify(dataBack));
    //   // setUser(dataBack);
    //   navigate('/');
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  }


  let command;
  if (localStorage.getItem("user") === null) {
    command = <Button variant="contained" href="#contained-buttons" onClick={handleClickConnection}>Connect yourself !</Button>
  }else {
    command = <Button variant="contained" href="#contained-buttons" onClick={handleClickOrder}>Do an order !</Button>
  }

  const [quant, setQuant] = React.useState(1);

  // const [orderedQuant, setOrderedQuant] = React.useState(0);
  
  // const [total, setTotal] = React.useState(0);

  // React.useEffect(() => {
  //         // setTotal(Number(data.price) * quant);
  // },[])

    // React.useEffect(() => {
    // setTotal(quant * backendData.price);
  // }, [quant, backendData.price]);

  const addQuant = (row) => {
   row.quantity = row.quantity + 1;
   localStorage.setItem("cart", JSON.stringify(products));
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  }

  const resetQuant = () => {
    // setQuant(1);
    // setOrderedQuant(0);
    // setTotal(0);
    // localStorage.removeItem('cart');
    localStorage.removeItem('cart')
  };

  function handleClickAddToCart() {
    // const items = {
    //   id: backendData.id,
    //   name: backendData.name,
    //   price: backendData.price,
    //   quantity: quant,
    //   total: total,
    // }
    // const cart = JSON.parse(localStorage.getItem('cart')) || {};
    // cart[items.id] = items;
    // localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <div style={{width:'80%'}}>
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Total Price</TableCell>
            {/* <TableCell>Quantity</TableCell> */}
            <TableCell>Quantity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell>${row.total}</TableCell>
              {/* <TableCell>{row.quantity}</TableCell> */}
              <TableCell> {/* align="right"*/}
              <div className="buttons">
                <div className="amount" style={{display: 'flex'}}>
                  <button className="minus" onClick={() => removeQuant(row)} disabled={quant === 1}>
                    <img src={minus} alt="icon-minus" />
                  </button>
                  <p>{row.quantity}</p>
                  <button className="plus" onClick={() => addQuant(row)} disabled={quant === 100}>
                    <img src={plus} alt="icon-plus" />
                  </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      Total Price : ${totalPrice}
      {command}
    </React.Fragment>
    </div>
  );
}