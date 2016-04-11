app.controller('EmployeeCtrl', function($scope, LetterPicker){
	$scope.getCurrentLetter = function(){
		return LetterPicker.getCurrentLetter();
	};
});