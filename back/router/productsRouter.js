let express = require('express');
let productsRouter = express.Router();

const Product = require('../class/Product');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../models/products.js')

productsRouter.get('/', function(req, res) {
    getAllProducts().then(products => {
      res.json({products:products})
    })
});

productsRouter.get('/details/:id', function(req, res) {
    getProductById(req.params.id).then(product => {
    res.json(product)
    })
});

productsRouter.get('/add', function(req, res) {
    const product1 = new Product(1, "retest", 50, "produit special", 10.50);
    createProduct(product1).then(message => {
        res.json(message)
    })
});

productsRouter.get('/update/:id', function(req, res) {
    const product1 = new Product(1, "revolution", 50, "produit qui fait un truc de naze", 10.50);
    updateProduct(req.params.id, product1).then(message => {
        res.json(message)
    })
});

productsRouter.get('/delete/:id', function(req, res) {
    deleteProduct(req.params.id).then(message => {
        res.json(message)
    })
});
  
module.exports = productsRouter;