let express = require('express');
let ordersRouter = express.Router();

const Order = require('../class/order');
const {getProductsByOrder, updateOrder, getAllOrders, getOrderById,  createOrder, getOrderId , createOrderProducts} = require('../models/order.js')

ordersRouter.get('/', function(req, res) {
    getAllOrders().then(categories => {
      res.json({categories:categories})
    })
});

ordersRouter.get('/details/:id', function(req, res) {
    getOrderById(req.params.id).then(categorie => {
    res.json(categorie)
    })
});

ordersRouter.post('/add', function(req, res) {
    // const order = new Order(1,3,1,50,1);

    const order = new Order(1, req.body.idUser, 1, req.body.total, "waiting")
    createOrder(order).then(message => {
        if ( message = "Order created") {
            getOrderId(order).then((order1) => {
                const promises = req.body.products.map(product => { createOrderProducts(product.id, order1.id, product.quantity) } )
                Promise.all(promises).then(message => {
                    console.log('All rows in orderProducts successfully created');
                    res.json(message)
                }).catch(err => { console.error(err) })
            })           
        }
    })
    // const order = req.body;
    console.log(order)
});

ordersRouter.get('/update/:id', function(req, res) {
    const order = new Order(1,3,1,50,"Expedié");
    updateOrder(req.params.id, order).then(message => {
        res.json(message)
    })
});



ordersRouter.get('/details/:id/products', function(req, res) {
    getProductsByOrder(req.params.id).then(products => {
        res.json(products)
    })
});


  
module.exports = ordersRouter;