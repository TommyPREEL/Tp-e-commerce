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
            reso(row);
        });
    })
}

function createProduct(product){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Products (name, description, price) VALUES (?,?,?)`;
        db.run(sql, [product.name, product.description, product.price], (err) => {
            if (err) {
                throw err;
            }
            res.json({message: "Product created"});
        });
    })
}

function updateProduct(id, product){
    const sql = `UPDATE Products SET name =?, description =?, price =? WHERE id =?`;
    db.run(sql, [product.name, product.description, product.price, id], (err) => {
        if (err) {
            throw err;
        }
        res.json({message: "Product updated"});
    });
}

function deleteProduct(id){
    const sql = `DELETE FROM Products WHERE id =?`;
    db.run(sql, [id], (err) => {
        if (err) {
            throw err;
        }
        res.json({message: "Product deleted"});
    });
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}