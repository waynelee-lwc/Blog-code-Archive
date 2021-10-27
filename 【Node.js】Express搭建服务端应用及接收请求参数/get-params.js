var express = require('express')
var bodyParser = require('body-parser')
var multiparty = require('connect-multiparty')

let app = express()


app.use(bodyParser.urlencoded({
    extended:true
}));


app.use(bodyParser.json())

app.use(multiparty())

app.get('/get',(req,res)=>{
    res.end('Here are params : ' + JSON.stringify(req.query))
})

app.post('/post/x-www-form-urlencoded',(req,res)=>{
    console.log('x-www-form-urlencoded')
    res.end('Here are params : ' + JSON.stringify(req.body))
})

app.post('/post/json',(req,res)=>{
    console.log('json')
    res.end('Here are params : ' + JSON.stringify(req.body))
})

app.post('/post/form-data',(req,res)=>{
    console.log('form-data')
    res.end('Here are params : ' + JSON.stringify(req.body));
})

let server = app.listen(8080,()=>{
    console.log('The server is listening on port : 8080')
})