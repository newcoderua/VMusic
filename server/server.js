var path = require('path');
var fs = require('fs');
var express = require('express');


//create app
var app = express();

//view engine
app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callback);
});

//middleware
app.use(express.static(__dirname));

//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

//server app
var port = 8000;
app.listen(port, () => {
  console.log('running at localhost:' + port);
});
