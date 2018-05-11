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


// THESE ROUTES DON'T EXIST????
// const routes = require('./routes/index');
// const users = require('./routes/users');

// create the app express
const app = express()
const db = require("./models");

// setting up handlebars~~~~
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
 
// setting our static content to the public folder
app.use(express.static("public"));

//BodyParser Middleware
app.use(bodyParser.json());

// maybe change this to true?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 5000


// Create default port to serve the app on

db.sequelize.sync().then(function() {
    app.listen(port)
    // Log port number
    console.log('Server listening on port: ' + port)
});