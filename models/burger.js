
//import orm.js
var orm = require("../config/orm.js");


//we need functions to show burgers, create a new burger, and "eat" a burger
var burger = {
    //a function to show all burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }

    //a function to create a new burger
        //insertOne

    //a function to update burgers to eaten status
        //updateOne
};

module.exports = burger;