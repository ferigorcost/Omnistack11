const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// assistir o final do video psra subir a aplicação para o git
app.listen(3333);
