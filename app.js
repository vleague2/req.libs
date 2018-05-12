const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require("express-validator");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Sequelize = require ('sequelize');
const exphbs = require('express-handlebars');

// connecting to controllers and assign them to variable
const storyController = require('./controllers/stories-api-routes.js');
const routes = require('./controllers/routes.js');
const users = require('./controllers/users.js');
// create the app express
const app = express()

// require our database models folder, which i think will actually happen in the controller?
const db = require("./models");


// setting up handlebars~~~~
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
 
// setting our static content to the public folder
app.use(express.static("public"));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

// telling the app which controller to use
app.use("/stories", storyController);
app.use("/", routes);
app.use("/auth", users);

const port = process.env.PORT || 5000


// Create default port to serve the app on

db.sequelize.sync({force:true}).then(function() {
    app.listen(port)
    // Log port number
    console.log('Server listening on port: ' + port)
});