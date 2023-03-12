import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

export default function Cart() {

  let navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [products, setProducts] = useState([])
  const toast = useRef(null);

  useEffect(() => {
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
        if(!localStorage.getItem('cart')){
          toast.current.show({severity:'error', summary: 'Error', detail:'Your cart is empty', life: 3000});
        }else{
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
    }

  let command;
  if (localStorage.getItem("user") === null) {
    command = <Button className='flex mt-2' onClick={handleClickConnection}>Connect yourself !</Button>
  }else {
    command = <Button className='flex mt-2' onClick={handleClickOrder}>Do an order !</Button>
  }

  const bodyPrice = (rowData) => {
    return `$${rowData.price}`;
  }

  const bodyTotal = (rowData) => {
    return `$${rowData.total}`;
  }

  const deleteCart = () => {
    localStorage.removeItem('cart')
    setDeleteDialog(false);
    window.location.reload();
    // navigate('/cart');
    // console.log(products)
    // toast.current.show({severity:'error', summary: 'Error', detail:'Cart removed', life: 3000});
  }

  const hideDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const handleClickDelete = () => {
    setDeleteDialog(true);
  };

  const deleteDialogFooter = (
    <React.Fragment>
        <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteDialog} />
        <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteCart} />
    </React.Fragment>
  );

  return (
    <div className="card m-5">
      <Toast ref={toast} />
        <Dialog visible={deleteDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteDialogFooter} onHide={hideDeleteDialog}>
          <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                <span>
                    Are you sure you want to remove your cart ?
                </span>
          </div>
        </Dialog>
        <div className='mb-2' style={{}}>Your cart items :</div>
        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Name"></Column>
            <Column body={bodyPrice} header="Unit price"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column body={bodyTotal} header="Total"></Column>
        </DataTable>
        <div className='mt-2' style={{right:0}}>Total : ${totalPrice}</div>
        <Button className='mt-2' icon="pi pi-trash" severity="danger" onClick={handleClickDelete}>Remove your cart</Button>
        {command}
    </div>
  );
}