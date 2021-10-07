var http = require('http');
var fs=require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/img',express.static(__dirname+'public/img'));
app.get('/', function (req, res) {
  fs.readFile('index.html',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

