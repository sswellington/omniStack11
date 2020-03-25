# Semana OmniStack 11 

0. [Configuração de Ambiente:](#-Configuração-de-Ambiente)
1. [Node.js](#-Node.js)
2. [React.js](#-React.js)
3. [Rota e Recursos](#-Rota-e-Recursos)
4. [Banco de dados](#-Banco-de-dados)

![alt text](/omniStack11.jpg)

----

## Configuração de Ambiente:

### Node.js
[Instalar o node.js](https://github.com/nodesource/distributions/blob/master/README.md)

* `npm`: instala um pacote
* `npx`: executa um pacote

~~~bash
 node -v #mostra a versão do node
 npm -v  #mostra a versão do npm
~~~

### Visual Studio Code: Plugins (Ctrl+P)
    * ext install spywhere.guides
    * ext install eamodio.gitlens
    * ext install christian-kohler.path-intellisense
    * ext install vscode-icons-team.vscode-icons	

----

## Node.js

### Hello world

~~~bash
 mkdir backend
 cd backend
 npm init -y # incializando node.js
 npm install express # instalando micro-framework 'express' (configura rota e interpreta parâmetros)
 touch index.js 
~~~

* `request`: guarda todos os dados que são fornecidos da requisição do usuário
* `response`: responder todos os dados que são requisitados pelo usuário

~~~javascript
const express = require('express'); 

const app = express();

app.get('/',(request, response) => {
	return response.send('Hello World');
});

app.listen(3333);
~~~

~~~bash
 node index.js # ativa o localhost:3333
~~~

----

## React.js
~~~bash 
 npx create-react-app frontend #cria um projet
 cd frontend
 npm start
~~~

----

# Dia 2  // Parei em 00:34:13 

## Rota e Recursos

### Métodos HTTP
* `GET`: *Buscar/Listar* uma informação do back-end
* `POST`: *Cria* uma informação do back-end
* `PUT`: *Altera* uma informação do back-end
* `DELETE`: *Delete* uma informação do back-end

#### [Insomnia.rest](https://insomnia.rest/) : (Ferramenta para manipular os Métodos HTTP)
~~~bash 
$ sudo snap install insomnia 
~~~

#### Tipos de parâmetros
* `Query Params`: parâmetros nomeados enviados na rota após *"?"*. Exemplo: filtro, páginação;
* `Route Params`: parâmetros utilizados para identificar recursos ;
* `Request Body`: Corpo da requisição, utilizado para criar ou alterar recursos.
    * Converter json para javascript: `app.use(express.json());`.

## Nodemon
* Atualiza automaticamente o servido do `Node.js`

~~~bash
npm install nodemon # em todo o programa
~~~

~~~bash
npm install nodemon -D # apenas na dependência de desenvolvimento
~~~

~~~bash
npm start # ativa e atualiza automaticamente o localhost:3333 
~~~

## Banco de dados

### [Knex.js](http://knexjs.org/)

~~~bash
npm install knex 
npm install sqlite3
~~~

### [SQLite](https://www.sqlite.org/index.html)
* Driver: SELECT * FROM users
* Query Builder: table('users').select(*).where()

~~~bash
npx knex init # configura o acesso ao banco de dados para cada aplicação
~~~