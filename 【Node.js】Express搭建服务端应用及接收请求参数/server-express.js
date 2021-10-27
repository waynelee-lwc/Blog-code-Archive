
var express = require('express')

let app = express()

app.get('/',(req,res)=>{
    console.log('Node.js received a request')
    res.end('Hello world from Node.js!')
})

app.get('/hello',(req,res)=>{
    res.end('hello')
})

let server = app.listen(8080,()=>{
    console.log('The server is listening on port : 8080')
})