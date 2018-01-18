var server = require('http').createServer(handler);
var fs = require('fs');

server.listen(8080);

function handler (req, res){
    fs.readFile('index.html', function(err, data){
        //res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}