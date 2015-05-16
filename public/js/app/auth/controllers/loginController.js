module.exports = function ($scope, authService) {
	$scope.login = function () {
		authService.authenticate();
	};
	$scope.form = {
		login: '',
		senha: ''
	};
};
