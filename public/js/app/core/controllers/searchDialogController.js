module.exports = function($scope, coreEventsService,$state,$stateParams,$mdDialog) {
	$scope.onUCUploadComplete = function (info){
		console.log(info);
		$scope.image=info.cdnUrl;
		console.log(info.cdnURL);
		$scope.$digest();
	};

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
