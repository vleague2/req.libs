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



SALT_WORK_FACTOR = 12;

// THESE ROUTES DON'T EXIST????
// const routes = require('./routes/index');
// const users = require('./routes/users');

// connecting to controllers and assign them to variable
const storyController = require('./controllers/stories-api-routes.js');
const routes = require('./controllers/routes.js');
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

// use controllers in controller folder
app.use("/", routes);


const port = process.env.PORT || 5000


// Create default port to serve the app on

db.sequelize.sync().then(function() {
    app.listen(port)
    // Log port number
    console.log('Server listening on port: ' + port)
});