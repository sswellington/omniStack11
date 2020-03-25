const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngController.index);   // Cadastrar
routes.post('/ongs', OngController.create); // Listar

module.exports = routes;