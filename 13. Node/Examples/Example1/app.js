var http = require('http')

http.createServer( (req , res)=>{

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Nodemon makes everything easier")

}).listen(5555 , "127.0.0.1");

console.log('Server running at http://127.0.0.1:5555');