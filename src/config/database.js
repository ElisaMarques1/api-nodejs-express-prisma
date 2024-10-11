const mysql2 = require('mysql2/promise');

//criar a conexão com o banco de dados
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'template_api'
});

//exportar a conexão com o banco de dados
module.exports = pool