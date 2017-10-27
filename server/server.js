var path = require('path');
var fs = require('fs');
var express = require('express');

var indexRoutes = require('./routes/index');
//create app
var app = express();

//view engine
app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callback);
});

//middleware
app.use(express.static(path.join(__dirname, '../client')));

//routes
app.use('/', indexRoutes);

//error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

//server app
module.exports = app;
