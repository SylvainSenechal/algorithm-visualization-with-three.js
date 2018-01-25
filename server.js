/*
var server = require('http').createServer(handler);
var fs = require('fs');

server.listen(8080);

function handler (req, res){
    fs.readFile('ind.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}
*/

/*
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('indexText2D.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(data);
    res.end(data);
  });
}).listen(8080);
*/

var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/bombardier.png', function(req, res) {
    res.sendFile(__dirname + '/bombardier.png');
});

app.get('/helvetiker_regular.typeface.json', function(req, res) {
    res.sendFile(__dirname + '/helvetiker_regular.typeface.json');
});

app.listen(8080);