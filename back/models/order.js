const db = require("./_bdd.js");



function getAllOrders(){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Orders`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        })
    })
}

function getOrderById(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Orders WHERE id =?`;
        db.get(sql, [id], (err, row) => {
            if (err) {
                throw err;
            }
            resolve(row);
        });
    })
}

function createOrder(order){
    return new Promise((resolve, reject) => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateOrder = year+'-'+month+'-'+day;
        const sql = `INSERT INTO Orders (id_users,orders_date,total_price,status) VALUES (?,?,?,?)`;
        db.run(sql, [order.id_users, dateOrder, order.total_price, "En attente" ], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `Order created`});
        });
    })
}

function createOrderProducts(idProduct, idOrder, quantity){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Product_Orders (id_products,id_orders,quantity) VALUES (?,?,?)`;
        db.run(sql, [idProduct, idOrder, quantity], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `PRODUCTS X ORDERS okay `});
        });
    })
}


function getOrderId(order){
    return new Promise((resolve, reject) => {
        const sql = `SELECT max(ID) as id FROM Orders WHERE id_users = ?`;
        db.get(sql, [order.id_users], (err, row) => {
            if (err) {
                throw err;
            }
            resolve(row);
        });
    })
}

function updateOrder(id, order){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Orders SET status = ? WHERE id = ?`;
        db.run(sql, [order.status, id], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `Order ${order.id} updated`});
        });
    })
}


function getProductsByOrder(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT *
        FROM Products p
        JOIN Product_Orders po ON po.id_products = p.id  
        WHERE po.id_orders = ?`;
        db.all(sql, [id], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    })
}




module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    createOrderProducts,
    getOrderId,
    updateOrder,
    getProductsByOrder
}