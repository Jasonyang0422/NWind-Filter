app.controller('NavbarCtrl', function($scope, LetterPicker){
	$scope.clearCurrentLetter = function(){
		LetterPicker.clearCurrentLetter();
	};
});