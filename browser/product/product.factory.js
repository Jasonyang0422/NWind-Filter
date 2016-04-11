app.factory('Product', function($http){
	var Product = {};
	var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	Product.getProducts = function(letter){
		return $http.get('/api/products/' + letter)
					.then(function(res){
						return res.data;
					});
	}

	Product.getEmptyProductLetter = function(){
		return $http.get('/api/product/letters')
					.then(function(res){
						return res.data;
					});		
	}

	return Product;

});