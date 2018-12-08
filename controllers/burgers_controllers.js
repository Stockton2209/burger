//import express and burger.js
const express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//the read function
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//post the data of the new burger
    //router.post("/api/burgers")

//updating burgers from not-eaten to eaten
    //router.put("/api/burgers/:id")






//export the router
module.export = router;

