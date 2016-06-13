var express = require('express');
var app = express();
var http = require('http').Server(app);
var HTMLing = require('htmling');


app.use("/public", express.static(__dirname + '/public'));
app.use("/reveal", express.static(__dirname + '/node_modules/reveal.js'));

app.engine('html', HTMLing.express(__dirname + '/views/'));
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('index', req);
});

app.get('/audience', function(req, res){
    res.render('audience', req);
});

// listen on port 3000
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});