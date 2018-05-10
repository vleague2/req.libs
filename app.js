
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require("express-validator");
const Flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Sequelize = require ('sequelize');

// create the app express
const app = express();
// create middleware to serve the app
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log port number
console.log('Server listening on port: ' + port)