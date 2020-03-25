const express = require('express');

const routes = express.Router();

routes.get('/',(request, response) => {
	return response.send('Hello World!');
});

routes.post('/users/',(request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Wellington Silva'
    });
});

module.exports = routes;