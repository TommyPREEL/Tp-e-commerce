import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility

// import { CustomerService } from './service/CustomerService';

export default function AdminDashboard() {

    const [products, setProducts] = useState([{}]);

    const [visible, setVisible] = useState(false);

    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    useEffect(() => {
        fetch("/products").then((response) => response.json()).then(
          data => {
            setProducts(data.products);
          }
        )
      }, []);

    function handleClickCreateProduct(){
        console.log(products);
    }

    // function click(){
    //     console.log(products);
    // }
    const [value, setValue] = useState('');

    return (
        <div className="card">
            {/* <button >Create Product</button> */}
            <Button onClick={() => setVisible(true)} label="New" icon="pi pi-plus" className="mr-2" />
            <Dialog header="Create a product" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <div>
                    <span className="p-float-label">
                        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>
                </div>
            </Dialog>
            <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="price" header="Unit Price" style={{ width: '20%' }}></Column>
                <Column field="description" header="Description" style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '20%' }}></Column>
                <Column field="" header="Modification" style={{ width: '20%' }}>grrg</Column>
            </DataTable>
        </div>
    );
}