const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World');
    res.write(req.url);
    res.end();
}).listen(8080);

// for example 
// localhost:8080 = Hello World
// localhost:8080/jack = Hello World/jack