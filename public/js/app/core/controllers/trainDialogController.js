module.exports = function($scope, coreEventsService,$state,$stateParams,$mdDialog) {
	$scope.duracao=2;
	$scope.frequencia=3;
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};

};
