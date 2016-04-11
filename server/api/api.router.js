var express = require('express');
var models = require('../db/models');
var Promise = require('bluebird');

var Product = models.Product;
var Employee = models.Employee;
var router = express.Router();

module.exports = router;

router.get('/employees/:letter', function(req, res, next){
	var letter = req.params.letter;
	Employee.find({name: {$regex: '^' + letter}})
		.then(function(employees){
			res.send(employees);
		})
		.then(null, next);
});

router.get('/products/:letter', function(req, res, next){
	var letter = req.params.letter;
	Product.find({name: {$regex: '^' + letter}})
		.then(function(products){
			res.send(products);
		})
		.then(null, next);
});

router.get('/:type/letters', function(req, res, next){
	var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var type = req.params.type;
	var array = [];
	Promise.map(alphabet, function(letter){
		if(type === 'product'){
			return	Product.find({name: {$regex: '^' + letter}})
						.then(function(products){
							if(!products.length)
								array.push(letter);
						});
		}
		if(type === 'employee'){
			return Employee.find({name: {$regex: '^' + letter}})
						.then(function(employees){
							if(!employees.length)
								array.push(letter);
						});
		}

	})
	.then(function(){
		res.send(array);
	})
})


















