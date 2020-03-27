# Semana OmniStack 11 

| [Configuração de Ambiente](#configuração-de-ambiente) | [Back-end](#back-end ) | [Front-end ](#front-end) | [Git Tags](#git) |
|:-------------------------------------------------------------------------:|:-------------------------------------:|:------------------------:|------------------|
| [Estrutura de diretórios](#estrutura-de-diretórios) | [Node.js](#nodejs-1) | [React.js ](#reactjs) | `Feat` |
| [Visual Studio Code](#visual-studio-code-plugins-ctrlp) | [Rota e Recursos](#rota-e-recursos  ) |  [React Icons](#icones-para-react) | `Docs` |
| [Node.js](#nodejs) | [Banco de dados](#banco-de-dados) | [React Router Dom](#router-no-react) | `Style` |
| [Nodemon](#nodemon) | [CORS](#módulo-de-segurança) |  | `Refactor` |
| [Insomnia.rest](#insomniarest--ferramenta-para-manipular-os-métodos-http) |  |  | `Test` |
|  |  |  | `Chore` |

![alt text](/omniStack11.jpg)

----

# Configuração de Ambiente:

### Estrutura de diretórios
#### `./backend`
* `./scr`
* `./controllers`
* `./database`
    * `./migration` 
#### `./frontend`
* `./public`
* `./scr`
    * `./assets`
    * `./pages`
        * `./Logon`
        * `./Register`

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

