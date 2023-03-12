import React, { useEffect, useState } from 'react'; 
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { useNavigate } from'react-router-dom';

export default function Orders() {
    
    const [ orders, setOrders ] = useState(null);
    const [ update, setUpdate ] = useState(false);

    const navigate = useNavigate()

    function header(order){
        return(
            <>
                <div className="flex mt-3 justify-content-around">
                    <div className='flex'><p style={{fontWeight:'bold'}}>Order number : {order.id}</p></div>
                    <div className='flex'><p style={{fontWeight:'bold'}}>Order date : {order.orders_date}</p></div>
                    <div className='flex'><p style={{fontWeight:'bold'}}>Total : ${order.total_price}</p></div>
                </div>
                <Divider />
            </>
        );
    };

    function footer(order){
        return(
            <>
                <Divider />
                <div className='flex'><p style={{fontWeight:'bold'}}>Status : {order.status}</p></div>
            </>
        );
    };

    useEffect(() => {
        if(!localStorage.getItem('user')){
            navigate('/access_denied');
        }else{
            fetch(`/orders/${JSON.parse(localStorage.getItem('user')).id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              })
              .then(response => response.json())
              .then(dataBack => {
                console.log(dataBack)
                setOrders(dataBack)
                if(orders === null){
                    setUpdate(!update)
                }
              })
              .catch(error => {
                console.error(error);
              });
        }
        
    }, [update])

    const colors = {
        'VALIDATED' : '#FCF7D2',
        'DELIVERED' : '#DBFCD2',
        'PAID' : '#D2D9FC',
        'CANCELLED' : '#FCD2D2',
    }

    return (
        <div>
            {orders == null ? <div>Loading</div> :
            orders.map(function(order, i){
                return <div className="card flex justify-content-center m-2">
                    <Card footer={() => footer(order)} header={() => header(order)} className="md:w-25rem" style={{backgroundColor : colors[order.status], minWidth: 800}}>
                    <div className="card flex justify-content-center m-2" style={{fontWeight:'bold'}}>
                        <div className="flex w-8 m-2"><span className="font-weight-bold">Product name</span></div>{/*img*/}
                        <div className="flex w-3 m-2">quantity</div>
                        <div className="flex w-3 m-2">Total price</div>
                    </div>
                    {order == null ? <div>Loading</div> : 
                    order.products.map(function(product, i){
                            return <div className="card flex justify-content-center m-2">
                                <div className="flex w-8 m-2">{product.name}</div>{/*img*/}
                                {/* <div>{product.name}</div> */}
                                <div className="flex w-3 m-2">{product.quantity}</div>
                                <div className="flex w-3 m-2">${product.price * product.quantity}</div>
                                </div>
                    })}
                    </Card>
                </div>
            })}
        </div>
    )
}