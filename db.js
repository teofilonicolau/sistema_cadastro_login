const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "cadastro_login",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err.stack);
    return;
  }
  console.log("Conectado ao banco de dados MySQL.");
});

module.exports = connection;
