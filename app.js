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

// this will change a little once we have our controllers organized
const routes = require('./routes/routes');

// create the app express
const app = express()

// require our database models folder, which i think will actually happen in the controller?
const db = require("./models");


require("./routes/stories-api-routes")(app);

// setting up handlebars~~~~
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
 
// setting our static content to the public folder
app.use(express.static("public"));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// use the routes in the routes folder. we will probably change this to controllers though!!!
app.use(routes);

const port = process.env.PORT || 5000


// Create default port to serve the app on

db.sequelize.sync().then(function() {
    app.listen(port)
    // Log port number
    console.log('Server listening on port: ' + port)
});