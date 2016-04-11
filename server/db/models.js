var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	name: String
});

var employeeSchema = new mongoose.Schema({
	name: String
});

var Product = mongoose.model('Product', productSchema);
var Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
	Product: Product,
	Employee: Employee
};