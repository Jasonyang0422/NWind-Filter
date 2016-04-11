app.factory('Employee', function($http){
	var Employee = {};
	var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	Employee.getEmployees = function(letter){
		return $http.get('/api/employees/' + letter)
					.then(function(res){
						return res.data;
					});
	}

	Employee.getEmptyEmployeeLetter = function(){
		return $http.get('/api/employee/letters')
					.then(function(res){
						return res.data;
					});	
	}

	return Employee;
});