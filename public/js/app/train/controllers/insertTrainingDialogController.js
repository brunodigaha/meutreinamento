module.exports = function($scope, coreEventsService,$state,$stateParams,$mdDialog) {
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
	$scope.plans = [
		"Sequencial",
		"Biset",
		"Circuito",
		"Piramide",
		"Triset"
	];

};
