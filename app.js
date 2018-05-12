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


SALT_WORK_FACTOR = 12;

// const routes = require('./routes/index');
// const users = require('./routes/users');

// create the app express
const app = express()
const db = require("./models");

//View Engine * might need to be adjusted as this was originally set up with handlebars in mind
app.set('views', path.join(__dirname,'views'));
//These next two might need to have the "vue" dependency installed and use that to replace express-vue
// app.engine('express-vue', vueExpress({defaultLayout:'layout'}));
//the defaultLayout above is referring to the default layoutfile so ours would be called layout.vue

// app.set('view engine', 'express-vue');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

const port = process.env.PORT || 5000


// Create default port to serve the app on

db.sequelize.sync().then(function() {
    app.listen(port)
    // Log port number
    console.log('Server listening on port: ' + port)
});