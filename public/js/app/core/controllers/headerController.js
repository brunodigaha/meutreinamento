module.exports = function ($scope, coreEventsService, authModelService) {
	var coreEvents = $scope.coreEventse = coreEventsService;
	$scope.logout = function () {
		authModelService.logout();
	};
};
