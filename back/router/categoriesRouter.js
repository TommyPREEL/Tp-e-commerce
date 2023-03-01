let express = require('express');
let categoriesRouter = express.Router();

const Categorie = require('../class/Categorie');
const { getAllCategories, getCategorieById,  createCategorie,  updateCategorie,  deleteCategorie } = require('../models/categorie.js')

categoriesRouter.get('/', function(req, res) {
    getAllCategories().then(categories => {
      res.json({categories:categories})
    })
});

categoriesRouter.get('/details/:id', function(req, res) {
    getCategorieById(req.params.id).then(categorie => {
    res.json(categorie)
    })
});

categoriesRouter.get('/add', function(req, res) {
    const categorie1 = new Categorie(1, "Boisson");
    createCategorie(categorie1).then(message => {
        res.json(message)
    })
});

categoriesRouter.get('/update/:id', function(req, res) {
    const categorie1 = new Categorie(2, "Boissons");
    updateCategorie(req.params.id, categorie1).then(message => {
        res.json(message)
    })
});

categoriesRouter.get('/delete/:id', function(req, res) {
    deleteCategorie(req.params.id).then(message => {
        res.json(message)
    })
});

module.exports = categoriesRouter;