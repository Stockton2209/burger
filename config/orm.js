//import the mysql connection.
const connection = require("./connection.js");

//convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string integer array
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // add quotations if it's a string with spaces 
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

//create the orm object for the sql statement functions
var orm = {
    //function to select all burgers
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //insertOne() function to create(add) a burger
        //"INSERT INTO tablename (columnName) VALUES (valueName)"
   
    //updateOne()  function to shown "eaten" burgers
    // update: function(table, objColVals, condition, cb) {
    //     var queryString = "UPDATE " + table;
    
    //     queryString += " SET ";
    //     queryString += objToSql(objColVals);
    //     queryString += " WHERE ";
    //     queryString += condition;
    
    //     console.log(queryString);
    //     connection.query(queryString, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });

}

module.exports = orm;