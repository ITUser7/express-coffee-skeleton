var express = require('express')
var app = express()
var coffees = require('./routes/coffee-routes');

// allow serving of static files from the public directory
app.use(express.static(__dirname + '/public'));

// 'hello' GET endpoint
app.get('/coffees', coffees.findAll);
app.get('/coffees/:id', coffees.findById); 

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Coffees app listening at http://%s:%s', host, port)
})