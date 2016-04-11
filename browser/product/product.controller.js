app.controller('ProductCtrl', function($scope, LetterPicker){
	$scope.getCurrentLetter = function(){
		return LetterPicker.getCurrentLetter();
	};
});