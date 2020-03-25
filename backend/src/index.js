const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); //Converte o json para javascript
app.use(routes);
app.listen(3333);