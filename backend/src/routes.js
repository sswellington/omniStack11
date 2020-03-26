// agrupamento de arquivos "Controller.js"

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index);   // Cadastrar
routes.post('/ongs', OngController.create); // Listar

routes.get('/incidents', IncidentController.index);         // Cadastrar
routes.post('/incidents', IncidentController.create);       // Listar
routes.delete('/incidents/:id', IncidentController.delete); // Apagar

module.exports = routes;