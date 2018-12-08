
//connect node to MySQL
const mysql = require("mysql");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

//connect mysql to by database
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Coders11",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connections.threadId);
});

module.exports = connection;