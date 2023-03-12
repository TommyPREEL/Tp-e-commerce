import React, { useEffect, useState, useRef } from 'react';
import CategoryCard from './CategoryCard';
import { useNavigate, Link } from'react-router-dom';

import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
// import { CustomerService } from './service/CustomerService';

function AdminDashboardOrders() {

    const [selectedCity, setSelectedCity] = useState(null);
    const [dialog, setDialog] = useState(false);
    const [tempStatus, setTempStatus] = useState()
    const [update, setUpdate] = useState(false)

    const ordersStatus = [
        { name: 'VALIDATED'},
        { name: 'PAID'},
        { name: 'DELIVERED'},
        { name: 'CANCELLED'}
    ];

    const emptyOrder = {
        id: null,
        id_users: null,
        orders_date: '',
        status: '',
        total_price: null,
        username: ''
    }
    const [backendData, setBackendData] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(emptyOrder);

    useEffect(() => {
        fetch("/orders").then((response) => response.json()).then(data => {
            setBackendData(data.orders);
          }
        )
      }, [update]);

      function test(){
        console.log(backendData)
      }

    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        country: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['CANCELLED', 'DELIVERED', 'PAID', 'VALIDATED']);

    const getSeverity = (status) => {
        switch (status) {
            case 'CANCELLED':
                return 'danger';

            case 'DELIVERED':
                return 'success';

            case 'PAID':
                return 'info';

            case 'VALIDATED':
                return 'warning';

            case 'renewal':
                return null;
            default:
                return null;
        }
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    // const verifiedBodyTemplate = (rowData) => {
    //     return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    // };

    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const header = renderHeader();

    

    // const onRowUnselect = (event) => {
    //     console.log(event);
    // };


    const onRowSelect = (event) => {
        // console.log(event.data.id);
        setSelectedOrder(event.data)
        setTempStatus(event.data.status)
        setDialog(true)
        console.log(event.data)
    };
    // Cancel button
    function handleClickNo(){
        setDialog(false);
    }

    // Save button
    const handleClickYes = () =>{
        let inputs = {
            status: tempStatus.name
        }
        fetch(`orders/update/${selectedOrder.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })
        .then(response => response.json())
        .then(dataBack => {
            setDialog(false);
            if(dataBack.message === 'Order updated') {
                setDialog(false)
                setUpdate(!update)
            }
        })
        .catch(error => {
          console.error(error);
        });
    }

    // Footer dialog
    const dialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={handleClickNo} className="p-button-text"/>
            <Button label="Save" icon="pi pi-check" onClick={handleClickYes} autoFocus/>
        </React.Fragment>
    );

    function onRowUnselect(){
        setSelectedOrder(emptyOrder)
    }
  return (
    <div>
        <button onClick={test}>Test</button>
        <Dialog header="Update the order status" visible={dialog} style={{ width: '50vw' }} onHide={() => setDialog(false)} footer={dialogFooter}>
                <div>
                    <div className="flex-auto">
                        <label htmlFor="username" className="font-bold block mb-2">Username</label>
                        <InputText id="username" defaultValue={selectedOrder.username} disabled/>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="orders_date" className="font-bold block mb-2">Orders Date</label>
                        <InputText id="orders_date" defaultValue={selectedOrder.orders_date} disabled/>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="price" className="font-bold block mb-2">Total Price</label>
                        <InputNumber inputId="price" value={selectedOrder.total_price} mode="currency" currency="USD" locale="en-US" disabled/>
                    </div>
                    <div className="flex-auto">
                    <label htmlFor="status" className="font-bold block mb-2">Status</label>
                        <Dropdown value={tempStatus} onChange={(e) => setTempStatus(e.value)} options={ordersStatus} optionLabel="name" 
                        editable placeholder="Select a Status" className="w-full md:w-14rem" />
                    </div>
                </div>
            </Dialog>
        {/* {backendData.map(function(category, i){
          return <Link to={`/categories/${category.id}/products`}><CategoryCard key={i} props={category}></CategoryCard></Link>
        })} */}
        <DataTable value={backendData} selectionMode="single" selection={selectedOrder} onSelectionChange={(e) => setSelectedOrder(e.value)} dataKey="id"
        onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false} paginator rows={10} /*filters={filters}*/ filterDisplay="row" /*loading={loading}*/
               /* globalFilterFields={['name', 'country.name', 'representative.name', 'status']} */header={header} emptyMessage="No customers found.">
            <Column field="orders_date" header="Order date" filter showFilterMenu={false} filterPlaceholder='test' style={{ minWidth: '12rem' }} />
            {/* <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" /> */}
            {/* <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} */}
                {/* body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} /> */}
            <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
        </DataTable>
    </div>
  );
}
export default AdminDashboardOrders;
// id: 7
// id_users: 7
// orders_date: "2023-3-9"
// status: "WAITING_FOR_VALIDATION"
// total_price: 1630