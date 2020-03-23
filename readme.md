# Semana OmniStack 11 

![alt text](/omniStack11.jpg)

----

## Configuração de Ambiente:

### Node.js
[Instalar o node.js](https://github.com/nodesource/distributions/blob/master/README.md)

> node -v // mostra a versão do node

### npm

> npm - v //mostra a versão do npm

### Visual Studio Code: Plugins (Ctrl+P)
    * ext install spywhere.guides
    * ext install eamodio.gitlens
    * ext install christian-kohler.path-intellisense
    * ext install vscode-icons-team.vscode-icons	
----

## Nodejs

### Hello world
> mkdir backend
> cd backend

> npm init -y
> npm install express

> touch index.js

```
const express = require('express');

const app = express();

app.get('/',(request, response) => {
	return response.send('Hello World');
});

app.listen(3333);
```

> node index.js

----

## Reactjs
> npx create-react-app frontend