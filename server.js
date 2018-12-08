
const express = require("express");
const app = express();

var PORT = process.env.PORT || 3000

//include the static content from the "public" folder
app.use(express.static("public"));

//telling express how to parse out the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
const exphbs = require("express-handlebars");
//define what we want handlebars to do and then engage it as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);    
//this line keeps getting referenced in my connection error

//Listener
app.listen(PORT, function() {
    console.log("App now listening at localhost: " + PORT);
})



