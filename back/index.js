let express = require('express');
let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");


const{ getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('./models/products.js')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/products', function(req, res) {
  getAllProducts().then(products => {
    res.json({products:products})
    // res.render('products', {products: products});
  })
});

app.get('/products/details/:id', function(req, res) {
  getProductById(req.params.id).then(product => {
    res.json(product)
  })
});

app.get('/products/add', function(req, res) {})


app.listen(5000, () => {
    console.log("Server start (http://localhost:5000/) !");
  });