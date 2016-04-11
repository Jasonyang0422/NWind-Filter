var mongoose = require('mongoose');
var Promise = require('bluebird');

var _conn;

function connect(){
	if(_conn)
		return _conn;
	_conn = new Promise(function(resolve, reject){
		mongoose.connect('mongodb://localhost/nwind-filter', function(err){
			if(err)
				reject(err);
			resolve(mongoose.connection);
		});
	});
	return _conn;
}

module.exports = {
	connect: connect
};