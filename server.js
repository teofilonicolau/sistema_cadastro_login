const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path"); 
const connection = require("./db");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/register", (req, res) => {
  const { username, password, email, telefone } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  connection.query(
    "INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)",
    [username, hashedPassword, email, telefone],
    (err, result) => {
      if (err) return res.status(500).send("Erro ao registrar o usuário");
      res.status(201).send("Usuário registrado com sucesso");
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(400).send("Usuário não encontrado");

      const user = results[0];
      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) return res.status(400).send("Senha incorreta");

      res.send("Login bem-sucedido");
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
