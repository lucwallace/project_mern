const express = require('express');
const connectDB = require('./config/db');

const user = require('./routes/users');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

app.use('router/users', user);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

//teste