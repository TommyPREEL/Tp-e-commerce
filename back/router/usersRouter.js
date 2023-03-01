let express = require('express');
let usersRouter = express.Router();

const User = require('../class/User');
const { getAllUsers, getUserByLogin, getUserById, createUser, updateUser, deleteUserById} = require('../models/users.js')

// usersRouter.get('/', function(req, res) {
//     getAllUsers().then(users => {
//       res.json({users:users})
//     })
// });

usersRouter.get('/details/:id', function(req, res) {
    getUserById(req.params.id).then(user => {
    res.json(user)
    })
});

usersRouter.get('/create', function(req, res) {
    const user1 = new User(1, "John", "Doe", "truc@machin.fr", "70 rue des champs 75000 Paris", "secret", false);
    createUser(user1).then(message => {
        res.json(message)
    })
});

usersRouter.get('/update/:id', function(req, res) {
    const user1 = new User(1, "John", "Doe", "truc@machin.fr", "70 rue des champs 75000 Paris", "secretchanged", false);
    updateUser(req.params.id, product1).then(message => {
        res.json(message)
    })
});

usersRouter.get('/delete/:id', function(req, res) {
    deleteUserById(req.params.id).then(message => {
        res.json(message)
    })
});

usersRouter.get('/connect', function(req, res) {
    getUserByLogin(req.params.id).then(message => {
        res.json(message)
    })
});
  
module.exports = usersRouter;