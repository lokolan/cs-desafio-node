var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');
var routes = require('./routes/routes');
var port = process.env.PORT || 8000;
var app = express();


mongoose.connect(config.connectionString);


app.get('/', function(req, res){
  res.send("Bem vindo a minha API!");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);
app.use(function(req, res, next){
    if(res.status(404)) {
    res.json({erro: 'Essa rota não existe'});
    return;
  }
});

app.listen(port, function(){
  console.log('Gulp is running my app on  PORT: ' + port);
})

module.exports = app;
