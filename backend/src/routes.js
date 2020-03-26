// agrupamento de arquivos "Controller.js"

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);   // Listar
routes.post('/ongs', OngController.create); // Cadastrar

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);         // Listar
routes.post('/incidents', IncidentController.create);       // Cadastrar
routes.delete('/incidents/:id', IncidentController.delete); // Apagar

module.exports = routes;