app.factory('LetterPicker', function($http){
	var LetterPicker = {};
	var currentLetter = null;

	LetterPicker.getCurrentLetter = function(){
		return currentLetter;
	}

	LetterPicker.selectLetter = function(letter){
		currentLetter = letter;
	}

	LetterPicker.clearCurrentLetter = function(){
		currentLetter = null;
	}

	return LetterPicker;
});