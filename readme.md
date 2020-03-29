# Semana OmniStack 11: Be The Hero 

<p align="center">
<img src="/frontend/src/assets/logo.svg">
</p>

| [Configuração de Ambiente](#configuração-de-ambiente) 	| [Back-end](#back-end ) 	| [Front-end ](#front-end) 	| [Mobile](#mobile) 	| [TDD](#tdd) 	| [Git Tags](#git) 	|
|:-------------------------------------------------------------------------:	|:-------------------------------------:	|:------------------------------------:	|:-------------------------------------:	|:-----------------------:	|:----------------:	|
| [Estrutura de diretórios](#estrutura-de-diretórios) 	| [Node.js](#nodejs-1) 	| [React.js ](#reactjs) 	| [React Native](#react-native) 	| [Joi](#joi) 	| `Feat` 	|
| [Visual Studio Code](#visual-studio-code-plugins-ctrlp) 	| [Rota e Recursos](#rota-e-recursos  ) 	| [React Icons](#icones-para-react) 	| [Expo](#expo) 	| [Celebrate](#celebrate) 	| `Docs` 	|
| [Node.js](#nodejs) 	| [Banco de dados](#banco-de-dados) 	| [React Router Dom](#router-no-react) 	| [React Navigation](#react-navigation) 	| [Jest](#jest) 	| `Style` 	|
| [Nodemon](#nodemon) 	| [CORS](#módulo-de-segurança) 	| [Cliente HTTP](#cliente-http) 	| [Cliente HTTP](#react-navigation) 	|  [Cross-Env](#cross-env)	| `Refactor` 	|
| [Insomnia.rest](#insomniarest--ferramenta-para-manipular-os-métodos-http) 	|  	|  	| [Intl](#intl) 	| [Supertest](#Supertest) 	| `Test` 	|
|  	|  	|  	|  	|  	| `Chore` 	|

![alt text](/omniStack11.jpg)

----

# Configuração de Ambiente:
### Estrutura de diretórios
#### `./backend`
* `./scr`
  * `./controllers`
  * `./utils`
  * `./database`
      * `./migration`
* `./tests`
  * `./integration`
  * `./unit`
#### `./frontend`
* `./public`
* `./scr`
    * `./assets`
    * `./pages`
        * `./Logon`
        * `./NewIncident`
        * `./Profile`
        * `./Register`
    * `./services`
#### `./mobile`
* `./assets`
* `./scr`
    * `./assets`
    * `./pages`
        * `./Detail`
        * `./Incidents`
    * `./services`

### Visual Studio Code: Plugins (Ctrl+P)
    * ext install spywhere.guides
    * ext install eamodio.gitlens
    * ext install christian-kohler.path-intellisense
    * ext install vscode-icons-team.vscode-icons	

### Node.js
[Instalar o node.js](https://github.com/nodesource/distributions/blob/master/README.md)

* `npm`: instala um pacote
* `npx`: executa um pacote

~~~bash
 node -v #mostra a versão do node
 npm -v  #mostra a versão do npm
~~~

### Nodemon
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

----

## Git
### Mensagens para Commit
* `feat`: um novo recurso
* `fix`: uma correção de bug
* `docs`: alterações na documentação
* `style`: formatação, falta de dois pontos, etc; nenhuma mudança de código
* `refactor`: refatoração do código de produção
* `test`: adicionando testes, teste de refatoração; nenhuma mudança de código de produção
* `chore`: atualizar tarefas de compilação, configurações do gerenciador de pacotes, etc; nenhuma mudança de código de produção

---- 

# Back-end 

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

##### Login
> Client Code
~~~javaScript
var data = JSON.stringify({
  "id": "aa1e8513"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3333/sessions");
xhr.setRequestHeader("authorization", "aa1e8513");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);
~~~

~~~http
POST /sessions HTTP/1.1
Authorization: aa1e8513
Content-Type: application/json
Host: localhost:3333
Content-Length: 22

{
	"id" : "aa1e8513"
}
~~~

> Curl
~~~json 
curl --request POST \
  --url http://localhost:3333/sessions \
  --header 'authorization: aa1e8513' \
  --header 'content-type: application/json' \
  --data '{
	"id" : "aa1e8513"
}'
~~~

##### Profile

> Client Code
~~~javaScript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:3333/profile");
xhr.setRequestHeader("authorization", "aa1e8513");

xhr.send(data);
~~~

~~~http
GET /profile HTTP/1.1
Authorization: aa1e8513
Host: localhost:3333
~~~

> Curl
~~~noBody
curl --request GET \
  --url http://localhost:3333/profile \
  --header 'authorization: aa1e8513'
~~~

##### Casos

* List

> Client Code
~~~javaScript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:3333/incidents?page=1");
xhr.setRequestHeader("authorization", "aa1e8513");

xhr.send(data);
~~~

~~~http
GET /incidents?page=1 HTTP/1.1
Authorization: aa1e8513
Host: localhost:3333
~~~

> Curl
~~~noBody
curl --request GET \
  --url 'http://localhost:3333/incidents?page=1' \
  --header 'authorization: aa1e8513'
~~~

* Create

> Client Code
~~~javaScript
var data = JSON.stringify({
  "title": "Casos 1",
  "description": "Detalhes dos casos",
  "value": 120
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3333/incidents");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "aa1e8513");

xhr.send(data);
~~~

~~~http
POST /incidents HTTP/1.1
Content-Type: application/json
Authorization: aa1e8513
Host: localhost:3333
Content-Length: 89

{ 
	"title" 			: "Casos 1",  
	"description" : "Detalhes dos casos", 
	"value" 			: 120
}
~~~


> Curl
~~~json
curl --request POST \
  --url http://localhost:3333/incidents \
  --header 'authorization: aa1e8513' \
  --header 'content-type: application/json' \
  --data '{ 
	"title" 			: "Casos 1",  
	"description" : "Detalhes dos casos", 
	"value" 			: 120
}'
~~~

* Delete

> Client Code
~~~javaScript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "http://localhost:3333/incidents/3");
xhr.setRequestHeader("authorization", "aa1e8513");

xhr.send(data);
~~~

~~~http
DELETE /incidents/3 HTTP/1.1
Authorization: aa1e8513
Host: localhost:3333
~~~

> Curl
~~~noBody
curl --request DELETE \
  --url http://localhost:3333/incidents/3 \
  --header 'authorization: aa1e8513'
~~~

##### Ongs
* List

> Client Code
~~~javaScript
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:3333/ongs");

xhr.send(data);
~~~

~~~http
GET /ongs HTTP/1.1
Host: localhost:3333
~~~

> Curl
~~~noBody
curl --request GET \
  --url http://localhost:3333/ongs
~~~

* Create

> Client Code
~~~javaScript
var data = JSON.stringify({
  "name": "APAD2",
  "email": "contato@apad.com.br",
  "whatsapp": "470000000",
  "city": "Rio do Sul",
  "uf": "SC"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3333/ongs");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);
~~~

~~~http
POST /ongs HTTP/1.1
Content-Type: application/json
Host: localhost:3333
Content-Length: 131

{
	"name" 		 : "APAD2",
	"email" 	 : "contato@apad.com.br",
	"whatsapp" : "470000000",
	"city" 		 : "Rio do Sul",
	"uf"			 : "SC"
}
~~~

> Curl
~~~json
curl --request POST \
  --url http://localhost:3333/ongs \
  --header 'content-type: application/json' \
  --data '{
	"name" 		 : "APAD2",
	"email" 	 : "contato@apad.com.br",
	"whatsapp" : "470000000",
	"city" 		 : "Rio do Sul",
	"uf"			 : "SC"
}'
~~~

#### Tipos de parâmetros
* `Query Params`: parâmetros nomeados enviados na rota após *"?"*. Exemplo: filtro, páginação;
* `Route Params`: parâmetros utilizados para identificar recursos ;
* `Request Body`: Corpo da requisição, utilizado para criar ou alterar recursos.
    * Converter json para javascript: `app.use(express.json());`.

---

## Banco de dados
### Modelo Conceitual: Entidades e Funcionalidades
* ONG
    * Cadastrar
    * Login
    * Logout
    * Contato
* CASOS (incident)
    * Cadastrar
    * Deletar
    * Listar
        * Especificos
        * Todos

### [SQLite](https://www.sqlite.org/index.html)
* Driver: SELECT * FROM users
* Query Builder: table('users').select( * ).where()

### [Knex.js](http://knexjs.org/)

* `Install`
~~~bash
npm install knex 
npm install sqlite3
~~~

~~~bash
npx knex init # configura o acesso ao banco de dados para cada aplicação
~~~

#### `Migrations` 

* Configuração do database pelo `knex`

~~~javascript
// knexfile.js
development: {
    client: 'sqlite3',
    connection: {
        filename: './src/database/db.sqlite'
    },
    migrations: {
        directory: './src/database/migrations'
    },
    useNullAsDefault: true
},
~~~

* gera uma tabela apenas no knexfile `create schema` 
~~~bash
npx knex migrate:make create_ongs 
~~~

* configura a estrutura da tabela para o comando `create table`
~~~javascript
// 20200325083011_create_ongs.js
exports.up = function(knex) {
  return knex.schema.createTable('ong', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  })
};

exports.down = function(knex) { return knex.schema.dropTable('ongs'); };
~~~

* executa o comando `create table` e cria tabela no banco de dados
~~~bash
npx knex migrate:latest 
~~~

* Desfaz o último comando do `npx knex migrate:latest`
~~~bash
npx knex migrate:rollback
~~~

--- 

## Módulo de Segurança
### Cross-Origin Resource Sharing (CORS)
Define quem possui autoridade de acessar a aplicação

~~~bash
npm install cors 
~~~

Exemplo de uso:

~~~javascript
app.use(cors({
    origin: 'domínio_da_app.com'
}));
~~~

---

# Frontend 
## React.js

### Criar projeto 
~~~bash 
cd..
npx create-react-app frontend #cria um projet
cd frontend
npm start
~~~

### Servidor
~~~bash 
npm start #porta 3000
serve -s build #porta 5000
~~~


### Icones para React
~~~bash 
cd frontend
npm install react-icons
~~~

### Router no React
~~~bash 
cd frontend
npm install react-router-dom
~~~

### Cliente HTTP
~~~bash 
cd frontend
npm install axios
~~~

---

### Conceitos 
* Limpeza de Componente
* JavaScript XML (JSX) 

#### Propriedades (`props`)
~~~javascript
export default function App() {
  return (
    <Header title="Semana"></Header>
  );
}

export default function Header(props) {
    return (
        <header>
            <h1> {props.title} </h1>
        </header>
    );
}
~~~    
##### `childen`
~~~javascript
export default function App() {
return (
    <Header> Semana OmniStack </Header>
);
}

export default function Header(props) {
    return (
        <header>
            <h1> {props.childen} </h1>
        </header>
    );
}
~~~  

* Estado
* Imutabilidade

### Configuração 
* Página de login
* Configuração de rotas
* ONGs
    * Cadastro
    * Listagem
    * cadastrar casos
* Conectar aplicação à API

---

# Mobile 
## React Native

### Emulador 
* Direto no celular: instalar o app `expo` no android
* Emulador online: snack.expo.io 

### Expo
~~~bash 
sudo npm install -g expo-cli
~~~

~~~bash
expo init mobile
# template: blank 
cd mobile
npm start
npm start --reset-cache
~~~

~~~bash
expo install expo-constants
~~~

~~~bash
expo install expo-mail-composer
~~~

#### Correção de erros :hammer:
##### internal/fs/watchers.js:177
~~~bash
internal/fs/watchers.js:177
    throw error;
~~~

[Solução](https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve)
~~~bash
sudo echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
~~~

### [React Navigation](https://reactnavigation.org/docs/getting-started)
~~~bash
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack
~~~

### Cliente  HTTP
~~~bash 
cd mobile
npm install axios
~~~

### Intl
~~~bash
npm install intl
~~~

--- 

# TDD

## [Joi](https://github.com/hapijs/joi)
Biblioteca de validação

## [Celebrate](https://github.com/arb/celebrate)

Integra Joi com Express

~~~bash
npm install celebrate
~~~

## [Jest](https://jestjs.io/)
~~~bash
npm install jest -D
~~~

## Cross-Env
~~~bash
npm install cross-env
~~~

>knexfile.js
~~~javascript
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
~~~

> package.json
~~~json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon src/server.js",
    "test": "cross-env NODE_ENV=test jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "celebrate": "^12.0.1",
    "cors": "^2.8.5",
    "cross-env": "^7.0.2",
    "express": "^4.17.1",
    "knex": "^0.20.13",
    "sqlite3": "^4.1.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2",
    "jest": "^25.2.3",
    "supertest": "^4.0.2"
  }
}
~~~

---

## [Supertest](https://github.com/visionmedia/supertest)
~~~bash
npm install supertest -D
~~~

<p align="center">
<img src="/frontend/src/assets/heroes.png">
</p>