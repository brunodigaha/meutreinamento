module.exports =  function($scope,$mdBottomSheet,$timeout, coreEventsService,$state,$stateParams) {
	$scope.params = $stateParams;
	$scope.state = $state.current;
	$scope.estado = $state.get();
	// $scope.eventsService= eventsService;
};
