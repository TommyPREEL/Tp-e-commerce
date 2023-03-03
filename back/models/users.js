const db = require("./_bdd.js");

function getAllUsers(){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Users`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        })
    })
}

function getUserById(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Users WHERE id =?`;
        db.get(sql, [id], (err, row) => {
            if (err) {
                throw err;
            }
            resolve(row);
        })
    })
}

function createUser(user){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Users (lastname, firstname, email, address, password, is_admin) VALUES (?,?,?,?,?,?)`;
        db.run(sql, [user.lastname, user.firstname, user.email, user.address, user.password, user.is_admin], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `User created successfully`});

        })
    })
}

function updateUser(user){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Users SET name =?, email =?, password =? WHERE id =?`;
        db.run(sql, [user.name, user.email, user.password, user.id], (err) => {
            if (err) {
                throw err;
            }
            resolve({message: `User ${product.name} updated`});
        })
    })
}

function deleteUserById(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Users WHERE id =?`;
        db.run(sql, [id], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve({message: `User deleted`});
        })
    })
}

function connection(login, password){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Users WHERE email =? AND password =?`;
        db.get(sql, [login, password], (err, row) => {
            if (err) {
                throw err;
            }
            resolve(row);
        })
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
    connection,
}