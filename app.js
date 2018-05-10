
const express = require('express')
// const cors = require('cors');
const serveStatic = require('serve-static')
const path = require('path')
// create the app express
const app = express()


// app.use(cors())
// create middleware to serve the app
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log port number
console.log('Server listening on port: ' + port)