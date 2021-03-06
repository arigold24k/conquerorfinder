var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app, path);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


