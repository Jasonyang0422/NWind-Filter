app.controller('EmployeeListCtrl', function($scope, $log, $stateParams, Employee){
	Employee.getEmployees($stateParams.letter)
		.then(function(employees){
			$scope.employees = employees;
		})
		.catch($log.error);
});