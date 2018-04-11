// app.js
var express = require('express');
var app = express();
var db = require('./db.js');

var UserController = require('./user/UserController.js');
app.use('/user', UserController); 

module.exports = app;
