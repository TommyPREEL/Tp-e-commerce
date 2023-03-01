let express = require('express');
let app = express();
let productsRouter = require('./router/productsRouter');
let usersRouter = require('./router/usersRouter');
let categoriesRouter = require('./router/categoriesRouter');

app.set("view engine", "ejs");
app.set("views", "./views");


app.get('/', function(req, res) {
  res.render('home');
});

/* Use routers */
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter)


/* Open the server */
app.listen(5000, () => {
  console.log("Server start (http://localhost:5000/) !");
});