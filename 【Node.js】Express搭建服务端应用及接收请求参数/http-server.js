
var http = require('http')

http.createServer((req,res)=>{
    console.log('Node.js received a request!');
    res.end('Hello world from Node.js!');
}).listen(8080)