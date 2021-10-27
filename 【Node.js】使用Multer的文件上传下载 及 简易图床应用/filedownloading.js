
var express = require('express')
var app = express()

app.use('/file',express.static('./files'))
app.use('/audio',express.static('./audios'))
app.use('/vedio',express.static('./vedios'))
app.use('/image',express.static('./images'))

var server = app.listen(8080,()=>{
    console.log('Server is listening on port 8080')
})