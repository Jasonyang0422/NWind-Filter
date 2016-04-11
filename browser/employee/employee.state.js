app.config(function($stateProvider){
	$stateProvider.state('employee', {
		url: '/employees',
		templateUrl: '/employee/employee.html',
		controller: 'EmployeeCtrl'
	});

	$stateProvider.state('employee.list', {
		url: '/:letter',
		templateUrl: '/employee/employee.list.html',
		controller: 'EmployeeListCtrl'
	});

})