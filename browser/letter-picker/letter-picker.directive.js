app.directive('letterPicker', function(LetterPicker, Employee, Product){
	return{
		restrict: 'E',
		scope: {
			type: '@'
		},
		templateUrl: '/letter-picker/letter-picker.html',
		link: function(scope){
			scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			scope.selectLetter = function(letter){
				LetterPicker.selectLetter(letter);
			};
			scope.getCurrentLetter = function(){
				return LetterPicker.getCurrentLetter();
			};		
			if(scope.type === 'employee'){
				Employee.getEmptyEmployeeLetter()
					.then(function(data){
						scope.disabledLetters = data;
					})
			}
			if(scope.type === 'product'){
				Product.getEmptyProductLetter()
					.then(function(data){
						scope.disabledLetters = data;
					})			
			}
		}
	};
});