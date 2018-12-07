//import the mysql connection.
const connection = require("../config/connection.js");

//create the object for the sql statement functions
var orm = {
    //selectAll() function
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    //insertOne() function to create a burger
    insertOne: function
    //updateOne() 

}

module.exports = orm;