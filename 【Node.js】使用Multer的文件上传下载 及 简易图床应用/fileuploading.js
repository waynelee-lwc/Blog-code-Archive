
var express = require('express')
var multer = require('multer')

let app = express();
/*
let upload = multer({dest:'/temp'});
app.use(upload.single('file'))
app.use(upload.array('file1'))
*/

let upload = multer({
    dest:'./temp'
})

app.post('/file/singleFile',upload.single('file'),(req,res)=>{
    console.log('Received a request with file:');
    console.log(req.file);
    res.send({
        code:200,
        message:'ok'
    });
})


app.post('/file/arrayFiles',upload.array('files',2),(req,res)=>{
    console.log('Received a request with files:');
    console.log(req.files);
    res.send({
        code:200,
        message:'ok'
    })
})  

app.post('/file/feildsFiles',upload.fields([{name:'files1',maxCount:2},{name:'files2',maxCount:2}]),(req,res)=>{
    console.log('Received a request with files')
    console.log(req.files);
    res.send({
        code:200,
        message:'ok'
    })
})

app.post('/file/anyFiles',upload.any(),(req,res)=>{
    console.log(req.files);

    res.end('hello');
})

let server = app.listen(8080,()=>{
    console.log('The server is listening on port : 8080');
})