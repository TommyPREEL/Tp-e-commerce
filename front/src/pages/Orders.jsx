import React, { useEffect, useState } from 'react'; 
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

export default function Orders() {

    // const emptyOrder =
    //     [
    //         {
    //           id: null,
    //           id_users: null,
    //           orders_date: '',
    //           total_price: null,
    //           status: '',
    //           products: [
    //             {
    //                 id: null,
    //                 name: '',
    //                 description: '',
    //                 quantity: null,
    //                 price: null,
    //                 img: null
    //             }
    //           ]
    //         }
    //       ];
    
    const [ orders, setOrders ] = useState(null);
    const [ update, setUpdate ] = useState(false);
    const [ color, setColor ] = useState("#FCF7D2")

    function header(order){
        return(
            <>
                <div className="flex p-2 justify-content-between" style={{backgroundColor: color}}>
                    <div className='flex'>Order number : {order.id}</div>
                    <div className='flex'>Total : ${order.total_price}</div>
                    <div className='flex'>Order date : {order.orders_date}</div>
                </div>
                <Divider />
            </>
        );
    };

    function footer(order){
        return(
            <>
                <Divider />
                <div className='flex'>Status : {order.status}</div>
            </>
        );
    };

    useEffect(() => {
        fetch(`/orders/${JSON.parse(localStorage.getItem('user')).id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(dataBack => {
            switch(dataBack.status) {
                case 'VALIDATED':
                    setColor('#FCF7D2')
                    break;
                case 'DELIVERED':
                    setColor('#DBFCD2')
                    break;
                case 'PAID':
                    setColor('#D2D9FC')
                    break;
                case 'CANCELED':
                    setColor('#FCD2D2')
                    break;
                default:
                    break;
            }
            setOrders(dataBack)
            if(orders === null){
                setUpdate(!update)
            }
          })
          .catch(error => {
            console.error(error);
          });
    }, [update])

    function ttt(product){
        console.log(product)
    }

    function cardColor(order){
        console.log(order)
    }

    return (
        <div>
            {orders == null ? <div>Loading</div> :
            orders.map(function(order, i){
                return <div className="card flex justify-content-center m-2">
                    <Card footer={() => footer(order)} header={() => header(order)} className="md:w-25rem" style={{backgroundColor : color, width:'auto'}}>
                    <div className="card flex justify-content-center m-2" style={{fontWeight:'bold'}}>
                        <div className="flex w-8 m-2" sty><span className="font-weight-bold">Product name</span></div>{/*img*/}
                        <div className="flex w-5 m-2">Total price</div>
                        <div className="flex m-2">quantity</div>
                    </div>
                    {order == null ? <div>Loading</div> : 
                    order.products.map(function(product, i){
                            return <div className="card flex justify-content-center m-2">
                                <div className="flex w-8 m-2" onClick={() => ttt(product)}>{product.name}</div>{/*img*/}
                                {/* <div>{product.name}</div> */}
                                <div className="flex w-5 m-2">${product.price * product.quantity}</div>
                                <div className="flex m-2">{product.quantity}</div>
                                </div>
                    })}
                    </Card>
                </div>
            })}
        </div>
    )
}