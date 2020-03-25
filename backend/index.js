const express = require('express');

const app = express();

app.use(express.json()); //Converte o json para javascript

app.get('/send',(request, response) => {
    return response.send('Hello World');
});

app.get('/json',(request, response) => {

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Wellington Silva'
    });
});

// `Query Params`: parâmetros nomeados enviados na rota após "?". 
//  Exemplo: filtro, páginação
//  Prática: http://localhost:3333/user?{% request 'name', '', 0 %}=Wellington&idade=23
app.get('/user',(request, response) => {

    const params = request.query; 

    console.log(params)

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Wellington Silva'
    });
});

// `Route Params`: parâmetros utilizados para identificar recursos
//  Prática: http://localhost:3333/users/0
app.get('/users/:id',(request, response) => {

    const params = request.params; 

    console.log(params)

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Wellington Silva'
    });
});

// `Request Body`: Corpo da requisição, utilizado para criar ou alterar recursos
/*  Prática: Ferramente Insomnia
    http://localhost:3333/users/0 {
	    "name": "Wellingto Silva",
	    "idade": 23
    }
*/ 
app.post('/users/:id',(request, response) => {

    const body = request.body; 

    console.log(body)

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Wellington Silva'
    });
});

app.listen(3333);