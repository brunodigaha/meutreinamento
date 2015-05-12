module.exports = function ($scope, authService) {
	$scope.login = function () {
		authService.authenticate();
	};
};
