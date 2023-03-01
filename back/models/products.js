const db = require("./_bdd.js");

function getAllProducts(){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Products`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        })
    })
}

function getProductById(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Products WHERE id =?`;
        db.get(sql, [id], (err, row) => {
            if (err) {
                throw err;
            }
            resolve(row);
        });
    })
}

function createProduct(product){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Products (name, quantity, description, price) VALUES (?,?,?,?)`;
        db.run(sql, [product.name, product.quantity, product.description, product.price], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `Product ${product.name} created`});
        });
    })
}

function updateProduct(id, product){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Products SET name =?, quantity=?, description =?, price =? WHERE id =?`;
        db.run(sql, [product.name, product.quantity, product.description, product.price, id], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `Product ${product.name} updated`});
        });
    })
}

function deleteProduct(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Products WHERE id =?`;
        db.run(sql, [id], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `Product deleted`});
        });
    })
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}