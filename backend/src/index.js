const express = require('express');
const cors = require('cors')

const routes = require('./routes');

const app = express();

app.use(cors()); //apermit que todas as app frontend acessem o backend
app.use(express.json()); //Converte o json para javascript
app.use(routes);
app.listen(3333);