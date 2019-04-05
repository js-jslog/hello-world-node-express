var express = require('express');
var app = express();

const route = '/' + ( process.env.ROUTE || '' );

// Routes
app.get(route, function(req, res) {
  const message = process.env.HELLO_MESSAGE || 'Hello World';
  res.send(message);
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
