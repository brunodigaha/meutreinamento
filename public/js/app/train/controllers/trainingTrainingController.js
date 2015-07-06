module.exports = function($scope) {
	$scope.train_menu= {menu: false};
	$scope.close_train_menu = function(){
		$scope.train_menu= {menu: false};
	};
	$scope.open_train_menu = function(){
		$scope.train_menu= {menu: true};
	};

};
