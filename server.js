//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var handleBars = require('express-handlebars');
var db = require("./models");
//start the server
var app = express();
var PORT = process.env.PORT || 8080;
//static dir /public
app.use(express.static(__dirname + "/public"));
//BP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//use MO and HB
app.use(methodOverride("_method"));
app.engine("handlebars", handleBars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//route the burger controller
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

db.sequelize.sync({}).then(function() {
	app.listen(PORT, function() {
		console.log("Listening on port: " + PORT);
	});
});