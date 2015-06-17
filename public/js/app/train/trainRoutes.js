var fs = require('fs');
module.exports = {
	train : {
		training : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Treinos'
			},
			views: {
				'content@core': {
					controller: function($scope, coreEventsService,$state,$stateParams) {
						$scope.params = $stateParams;
						$scope.state = $state.current;
						$scope.estado = $state.get();
						// $scope.eventsService= eventsService;
					},
					template: fs.readFileSync(__dirname + '/templates/trainingContent.html')
				},
			}
		},
		addtraining : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Criar Treino'
			},
			views: {
				'wrap@': {
					controller: function($scope, coreEventsService,$state,$stateParams) {
						$scope.params = $stateParams;
						$scope.state = $state.current;
						$scope.plans = [
							"Treino A",
							"Treino B",
							"Treino C",
							"Treino D",
							"Treino E",
							"Treino F"
						];
						$scope.showGridBottomSheet = function($event) {
							$mdBottomSheet.show({
								templateUrl: 'bottom-sheet-grid-template.html',
								controller: 'GridBottomSheetCtrl',
								targetEvent: $event
							}).then(function(clickedItem) {
								alert(clickedItem.name + ' clicked!');
							});
						};
					// $scope.eventsService= eventsService;
				},
				template: fs.readFileSync(__dirname + '/templates/addtrainingWrap.html')
			}
		}
	}
}
};
