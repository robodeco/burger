var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))
// public is a directory

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./controllers/burgerController.js")(app);


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
