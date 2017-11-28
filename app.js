var config = require('./config.js');
var request = require('./core/request.js');
var express = require('express');
var events = require('events');
var say = require('./core/say.js');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/say/:token', function (req, res) {
  if(config.token !== req.params.token) return res.status(403).send({"error": "forbidden"});
  say(req.body);
  return res.status(200).send({});
});



var server = app.listen(8080, '192.168.1.242', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Gladys client listening at http://%s:%s", host, port)

})
