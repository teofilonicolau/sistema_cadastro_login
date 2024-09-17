const express = require('express');
const app = express();
const port = 3000;

const db = require('./db');

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.send('Erro ao acessar o banco de dados');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
