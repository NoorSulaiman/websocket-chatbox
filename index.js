var express = require('express');

//App setup

var app = express();

var server = app.listen(4000,function(){
    console.log('listining to request on port 4000')
})

//static files

app.use(express.static('public'))