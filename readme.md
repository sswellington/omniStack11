# Semana OmniStack 11 

![alt text](/omniStack11.jpg)

----

## Configuração de Ambiente:

### Node.js
[Instalar o node.js](https://github.com/nodesource/distributions/blob/master/README.md)

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

## Reactjs
~~~bash 
 npx create-react-app frontend #cria um projet
 cd frontend
 npm start
~~~

----

# Dia 2  // Parei em 00:23:13 

# Rota e Recursos

## Métodos HTTP
* `GET`: *Buscar/Listar* uma informação do back-end
* `POST`: *Cria* uma informação do back-end
* `PUT`: *Altera* uma informação do back-end
* `DELETE`: *Delete* uma informação do back-end

## Tipos de parâmetros
* `Query Params`: parâmetros nomeados enviados na rota após "?". Exemplo: filtro, páginação
* `Route Params`: parâmetros utilizados para identificar recursos 
* `Request Body`: Corpo da requisição, utilizado para criar ou alterar recursos
    * Converter json para javascript: `app.use(express.json());` 

## Insomnia.rest
~~~bash 
$ sudo snap install insomnia 
~~~

## Nodemon
* Atualiza automaticamente o servido do `Node.js`
~~~bash
npm install nodemon # em todo o programa
~~~

~~~bash
npm install nodemon -D # apenas na dependência de desenvolvimento
~~~

~~~bash
 npm start # ativa o localhost:3333 
~~~

## Banco de dados
### SQLite
* Driver: SELECT * FROM users
* Query Builder: table('users').select(*).where()