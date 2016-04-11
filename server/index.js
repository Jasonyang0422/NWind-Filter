var http = require('http');
var db = require('./db/db');
var models = require('./db/models')

var server = http.createServer();

server.on('request', require('./app'));

db.connect()
	.then(function(){
		server.listen(3000, function(){
			console.log('server is running on port 3000');
		});				
	});

