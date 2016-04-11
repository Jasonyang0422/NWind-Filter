var express = require('express');

var app = express();

module.exports = app;

var path = '/Users/yangjiacheng/Fullstack/NWind-Filter'
app.use(express.static(path + '/bower_components'));
app.use(express.static(path + '/browser'));

app.use('/api', require('../api/api.router.js'));

app.get('/', function(req, res, next){
	res.sendFile(path  + '/public/index.html');
});