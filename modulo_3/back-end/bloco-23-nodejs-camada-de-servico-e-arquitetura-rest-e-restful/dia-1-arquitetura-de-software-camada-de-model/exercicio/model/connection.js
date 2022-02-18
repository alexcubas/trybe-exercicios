const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'trybe12345',
  database: 'model_example'
})

module.exports = connection;
