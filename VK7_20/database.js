const mysql = require('mysql2');

const myConnectionString = "mysql://netuser:passu123vf@dvw0zmy!ERD@localhost:3306/netdb";
const connection = mysql.createPool(myConnectionString);

module.exports = connection;