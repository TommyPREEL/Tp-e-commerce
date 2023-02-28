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
function getUserByLogin(login, password){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Users WHERE mail =? AND password =?`;
        db.all(sql, [login, password], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        })
    })
}

function deleteUserById(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Users WHERE id =?`;
        db.all(sql, [id], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        })
    })
}

function addUser(user){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Users (lastname, firstname, mail, address, password) VALUES (?,?,?,?,?)`;
        db.run(sql, [user.lastname, user.firstname, user.mail, user.address, user.password], (err) => {
            if (err) {
                throw err;
            }
            resolve();
        })
    })
}

function updateUser(user){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Users SET name =?, mail =?, password =? WHERE id =?`;
        db.run(sql, [user.name, user.mail, user.password, user.id], (err) => {
            if (err) {
                throw err;
            }
            resolve();
        })
    })
}

module.exports = {
    getAllUsers,
    getUserByLogin,
    deleteUserById,
    addUser,
    updateUser
}