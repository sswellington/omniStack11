## ambiente:

<p align="center">
	<img src="omniStack11.jpg">
</p>

### node.js
https://github.com/nodesource/distributions/blob/master/README.md

> node -v #versão do node

### npm

> npm - v #versão do npm

### Visual Studio Code

----

## Nodejs

### Hello world
> mkdir backend
> cd backend

> npm init -y
> npm install express

> touch index.js

'''
const express = require('express');

const app = express();

app.get('/',(request, response) => {
	return response.send('Hello World');
});

app.listen(3333);
'''

> node index.js

## Reactjs
> npx create-react-app frontend