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

ordersRouter.get('/add', function(req, res) {
    const order = new Order(1,3,1,50,1);
    createOrder(order).then(message => {
        if ( message = "Order created") {
            getOrderId(order).then((orderId) => {
                console.log(orderId)
                createOrderProducts(2,orderId.id, 40).then((message) => {
                    res.json(message)
                })
            })           
        }
    })
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