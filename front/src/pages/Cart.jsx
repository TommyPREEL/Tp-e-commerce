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
import DeleteIcon from '@mui/icons-material/Delete';
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
    if(localStorage.getItem("cart") !== null) {
    const rows = JSON.parse(localStorage.getItem("cart"))
    let totalPriceItems = 0
    const arr = Object.values(rows).map(item => {
      totalPriceItems += item.total
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.total,
      };
    });
    setProducts(arr);
    setTotalPrice(Number(totalPriceItems))
  }
  }, [])
  
  function handleClickConnection() {
    navigate('/users/connect')
  }

  function handleClickOrder() {
    let inputs = {
      idUser: JSON.parse(localStorage.getItem("user")).id,
      total: totalPrice,
      products: []
    };

    products.forEach(product => {
      inputs.products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        total: product.total,
      });
    });
    console.log(JSON.stringify(inputs))
    fetch('/orders/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)

    })
    .then(response => response.json())
    .then(dataBack => {
      localStorage.removeItem('cart');
      navigate('/orders', { state: { showSnackbar: true, message: `Order created successfully` }});
    })
    .catch(error => {
      console.error(error);
    });
  }


  let command;
  if (localStorage.getItem("user") === null) {
    command = <Button variant="contained" onClick={handleClickConnection}>Connect yourself !</Button>
  }else {
    command = <Button variant="contained" onClick={handleClickOrder}>Do an order !</Button>
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

  function handleClickDelete(row) {
    const newTable = products.filter(item => item.id!== row.id);
    setProducts(newTable);
    navigate('/cart');
    console.log(products)
  }
  return (
    <div style={{width:'80%'}}>{localStorage.getItem("cart") === null ? (<div>Cart empty</div>) : (
    <React.Fragment>
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
              <TableCell>
              <DeleteIcon onClick={() => handleClickDelete(row)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    <div>Total Price : ${totalPrice}</div>
      {command}
    </React.Fragment>)}
    </div>
  );
}

function Tableau(props) {
  const [data, setData] = React.useState(props.data);

  React.useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const handleModification = (index, newData) => {
    const newsData = [...data];
    newsData[index] = newData;
    setData(newsData);
  };

  return (
    <div>
      {data.map((aData, index) => (
        <Donnee key={index} donnee={aData} onModification={(newData) => handleModification(index, newData)} />
      ))}
    </div>
  );
}

function Donnee(props) {
  const [aData, setAData] = React.useState(props.aData);

  React.useEffect(() => {
    setAData(props.aData);
  }, [props.aData]);

  const handleModification = (event) => {
    const newData = event.target.value;
    setAData(newData);
    props.onModification(newData);
  };

  return (
    <input type="text" value={aData} onChange={handleModification} />
  );
}