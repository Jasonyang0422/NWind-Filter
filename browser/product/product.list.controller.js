app.controller('ProductListCtrl', function($scope, $log, $stateParams, Product){
	Product.getProducts($stateParams.letter)
		.then(function(products){
			$scope.products = products;
		})
		.catch($log.error);
});