app.config(function($stateProvider){
	$stateProvider.state('product', {
		url: '/products',
		templateUrl: '/product/product.html',
		controller: 'ProductCtrl'
	});
	
	$stateProvider.state('product.list', {
		url: '/:letter',
		templateUrl: '/product/product.list.html',
		controller: 'ProductListCtrl'
	});

})