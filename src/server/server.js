// Importing required modules
const cors = require("cors")
const express = require("express")
const session = require('express-session');

// parse env variables
require("dotenv").config()

// Configuring port
const port = process.env.PORT || 9000

const app = express()

// Configure middlewares
app.use(cors());
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

app.set("view engine", "html")

// Static folder
app.use(express.static(__dirname + "/views/"))

// Database connection
require("./models/database_connection")

// Defining route middleware
app.use("/api", require("./routes/api"))

// Listening to port
app.listen(port)
console.log(`Listening On http://localhost:${port}/api`)

module.exports = app
