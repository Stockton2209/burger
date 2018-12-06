
//connect node to MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Coders11",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connections.threadId);
});

module.exports = connection;