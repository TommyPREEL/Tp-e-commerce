let express = require('express');
let app = express();
const bodyParser = require("body-parser");
let productsRouter = require('./router/productsRouter');
let usersRouter = require('./router/usersRouter');
let categoriesRouter = require('./router/categoriesRouter');
let ordersRouter = require('./router/ordersRouter');

app.set("view engine", "ejs");
app.set("views", "./views");

let session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/', function(req, res) {
  res.render('home');
});

app.use(bodyParser.json());

/* Use routers */
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter)
app.use('/orders', ordersRouter)

app.get('/test', function(req, res) {
  res.sendStatus(200);
});


/* Open the server */
app.listen(5000, () => {
  console.log("Server start (http://localhost:5000/) !");
});

module.exports = app;