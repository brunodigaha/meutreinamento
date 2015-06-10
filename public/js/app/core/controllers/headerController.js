module.exports = function ($scope, coreEventsService, authModelService) {
	var coreEvents = $scope.coreEventse = coreEventsService;
	$scope.plans = [
		"12/04/15 - 12/05/15",
		"13/04/15 - 12/05/15",
		"14/04/15 - 12/05/15",
		"19/04/15 - 12/05/15",
		"18/04/15 - 12/05/15",
		"15/04/15 - 12/05/15",
		"16/04/15 - 12/05/15"
	];
	$scope.logout = function () {
		authModelService.logout();
	};
};
