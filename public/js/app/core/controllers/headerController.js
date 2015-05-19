module.exports = function ($scope, eventsService, authModelService) {
	var model =  $scope.eventsService = eventsService;
	$scope.logout = function () {
		authModelService.logout();
	};
};
