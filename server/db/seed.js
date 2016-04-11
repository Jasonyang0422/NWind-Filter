var faker = require('faker');
var db = require('./db');
var models = require('./models');
var Promise = require('bluebird');

var Product = models.Product;
var Employee = models.Employee;
var promiseArray = [];

db.connect()
	.then(function(){
		return Promise.all([Product.remove(), Employee.remove()]);
	})
	.then(function(){
		for(var i = 0; i < 100; i++){
			promiseArray.push(Employee.create({
				name: faker.name.findName()
			}));
			promiseArray.push(Product.create({
				name: faker.commerce.productName()
			}));
		}
		return Promise.all(promiseArray);
	})
	.then(function(){
		console.log('seed successfully');
	});

