/* Quand je crée un produit, je n'ai pas d'id, donc je ne peux pas en créer un puis le supprimer ou modifier juste après
* Je dois refresh la page entre temps
* Pas de refresh après l'update de mon product
*/

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility

// import { CustomerService } from './service/CustomerService';

export default function AdminDashboard() {

    /*
    * Create a Product
    */

    /*
    * Edit a product
    */

    const [editProductDialog, setEditProductDialog] = useState(false);
    
    /*
    * Delete a product
    */

    const [deleteProductDialog, setDeleteProductDialog] = useState(false);








    const [products, setProducts] = useState([{}]);

    const [visible, setVisible] = useState(false);

    const footerContent = (
        // <div>
        //     <Button label="No" icon="pi pi-times" onClick={handleClickNoAdd} className="p-button-text" />
        //     <Button label="Yes" icon="pi pi-check" onClick={() => handleClickYesAdd()} autoFocus />
        // </div>
        <React.Fragment>
        <Button label="Cancel" icon="pi pi-times" outlined onClick={handleClickNoAdd} className="p-button-text"/>
        <Button label="Save" icon="pi pi-check" onClick={handleClickYesAdd} autoFocus/>
    </React.Fragment>
    );
    
    
    const emptyProduct = {
        id: null,
        name: null,
        price: null,
        description: null,
        quantity: null,
        img: null
    }

    const [product, setProduct] = useState(emptyProduct)

    useEffect(() => {
        fetch("/products").then((response) => response.json()).then(
          data => {
            setProducts(data.products);
            setProduct(emptyProduct)
          }
        )
      }, []);

    function handleClickCreateProduct(){
        console.log(products);
    }

    // function click(){
    //     console.log(products);
    // }
    const [inputTextProductName, setInputTextProductName] = useState('');
    const [inputTextProductDescription, setInputTextProductDescription] = useState('');
    const [inputNumberProductPrice, setInputNumberProductPrice] = useState(0);
    const [inputNumberProductQuantity, setInputNumberProductQuantity] = useState(1);

    const [editInputTextProductName, setEditInputTextProductName] = useState('');
    const [editInputTextProductDescription, setEditInputTextProductDescription] = useState('');
    const [editInputNumberProductPrice, setEditInputNumberProductPrice] = useState(0);
    const [editInputNumberProductQuantity, setEditInputNumberProductQuantity] = useState(1);

    let navigate = useNavigate();

    function handleClickNoUpdate(){
        setEditProductDialog(false);
        // setEditInputTextProductName('');
        // setEditInputTextProductDescription('');
        // setEditInputNumberProductPrice(0);
        // setEditInputNumberProductQuantity(1);
    }

    const handleClickYesUpdate = () =>{
        let inputs = {
            name: editInputTextProductName,
            description: editInputTextProductDescription,
            price: editInputNumberProductPrice,
            quantity : editInputNumberProductQuantity
          }
        console.log(inputs)
        console.log(product.id)
        fetch(`/products/update/${product.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
    
        })
        .then(response => response.json())
        .then(dataBack => {
            setEditProductDialog(false);
            console.log(dataBack)
            // if(dataBack.message === 'Product created'){
                // navigate('/admin');
            // }
        })
        .catch(error => {
          console.error(error);
        });
    }

    function handleClickNoAdd(){
        setVisible(false);
        setInputTextProductName('');
        setInputTextProductDescription('');
        setInputNumberProductPrice(0);
        setInputNumberProductQuantity(1);
    }

    function handleClickYesAdd(){
        let inputs = {
            name: inputTextProductName,
            description: inputTextProductDescription,
            price: inputNumberProductPrice,
            quantity : inputNumberProductQuantity
          }
        console.log(inputs)
        fetch('/products/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
    
        })
        .then(response => response.json())
        .then(dataBack => {
            setVisible(false);
            console.log(dataBack)
            if(dataBack.message === 'Product created'){
                navigate('/admin');
            }
        })
        .catch(error => {
          console.error(error);
        });
    }
    
    const editProduct = (product) => {
        setProduct({ ...product });
        setEditProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);
        fetch(`/products/delete/${product.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            } 
          })
          .then(response => response.json())
          .then(dataBack => {
              console.log(dataBack)
              if(dataBack.message === 'Product created'){
                  navigate('/admin');
              }
          })
          .catch(error => {
            console.error(error);
          });
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
    };
    
    function handleChangeInputNumberQuantity(event){
        setEditInputNumberProductQuantity(event.target.value);
    }

    function handleChangeInputNumberPrice(event){
        setEditInputNumberProductPrice(event.target.value);
    }

    const editProductDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={handleClickNoUpdate} />
            <Button label="Save" icon="pi pi-check" onClick={handleClickYesUpdate} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );

    const modificationButtons = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            {/* <button >Create Product</button> */}
            <Button onClick={() => setVisible(true)} label="New" icon="pi pi-plus" className="mr-2" />
            <Dialog header="Create a product" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <div>
                    <div className="flex-auto">
                        <label htmlFor="name" className="font-bold block mb-2">Name</label>
                        <InputText id="name" value={inputTextProductName} onChange={(e) => setInputTextProductName(e.target.value)} />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="description" className="font-bold block mb-2">Description</label>
                        <InputTextarea id="description" value={inputTextProductDescription} onChange={(e) => setInputTextProductDescription(e.target.value)} rows={5} cols={30} />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="price" className="font-bold block mb-2">Unit Price</label>
                        <InputNumber inputId="price" value={inputNumberProductPrice} onValueChange={(e) => setInputNumberProductPrice(e.value)} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="quantity" className="font-bold block mb-2">Quantity</label>
                        <InputNumber inputId="quantity" value={inputNumberProductQuantity} onValueChange={(e) => setInputNumberProductQuantity(e.value)} />
                    </div>
                </div>
            </Dialog>
            <Dialog header="Update a product" visible={editProductDialog} style={{ width: '50vw' }} onHide={() => setEditProductDialog(false)} footer={editProductDialogFooter}>
                <div>
                    <div className="flex-auto">
                        <label htmlFor="name" className="font-bold block mb-2">Name</label>
                        <InputText id="name" defaultValue={product.name} onChange={(e) => setEditInputTextProductName(e.target.value)} />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="description" className="font-bold block mb-2">Description</label>
                        <InputTextarea id="description" defaultValue={product.description} onChange={(e) => setEditInputTextProductDescription(e.target.value)} rows={5} cols={30} />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="price" className="font-bold block mb-2">Unit Price</label>
                        <InputNumber inputId="price" value={product.price} onValueChange={(event) => handleChangeInputNumberPrice(event)} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="quantity" className="font-bold block mb-2">Quantity</label>
                        <InputNumber inputId="quantity" value={product.quantity} onValueChange={(event) => handleChangeInputNumberQuantity(event)} />
                    </div>
                </div>
            </Dialog>
            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="price" header="Unit Price" style={{ width: '20%' }}></Column>
                <Column field="description" header="Description" style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '20%' }}></Column>
                <Column body={modificationButtons} header="Modification" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}