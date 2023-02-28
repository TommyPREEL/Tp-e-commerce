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

// function getProductById(id){
//     const sql = `SELECT * FROM Products WHERE id =?`;
//     db.get(sql, [id], (err, row) => {
//         if (err) {
//             throw err;
//         }
//         res.json(row);
//     });
// }

// function createProduct(product){
//     const sql = `INSERT INTO Products (name, description, price) VALUES (?,?,?)`;
//     db.run(sql, [product.name, product.description, product.price], (err) => {
//         if (err) {
//             throw err;
//         }
//         res.json({message: "Product created"});
//     });
// }

module.exports = {
    getAllProducts
}