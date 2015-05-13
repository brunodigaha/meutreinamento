module.exports = function ($scope, eventsService, authService) {
	var model =  $scope.eventsService = eventsService;
	$scope.logout = function () {
		authService.logout();
	};
};
