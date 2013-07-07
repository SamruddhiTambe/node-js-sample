#!/usr/bin/env node

var fs = require ("fs");
var express = require('express');

var inputfile = "index.html";
var webout = fs.readFileSync('index.html');

 console.log(webout);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(webout);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



