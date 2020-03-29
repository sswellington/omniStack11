//agrupamento de arquivos "Controller.js"

const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*
* SessionController
*/

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create);

/*
* OngController
*   Lista todos os casos de uma determinada ONG
*/

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

/*
* OngController
*/

routes.get('/ongs', OngController.index);   // Listar ONGs

// Cadastrar ONGs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(14),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

/*
* IncidentController 
*/

//Listar
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.number(),
}), IncidentController.index);

// Cadastrar
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), IncidentController.create);

// Apagar
// corrigir error: número estiver fora do banco gera loop
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;