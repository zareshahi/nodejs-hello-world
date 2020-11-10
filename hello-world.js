var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write('Server Working');
    fs.readFile('index.html', (error, data) => {
        if (error)
            throw error;
        console.log('operation success!');
        // sending response
        response.end(data); 
    })
});

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occure: ', error);
    }
    console.log('Server is listening on '+ host + ':' + port);
});
