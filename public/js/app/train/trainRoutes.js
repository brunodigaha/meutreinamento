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
					controller: function($scope,$mdBottomSheet,$timeout, coreEventsService,$state,$stateParams) {
						$scope.params = $stateParams;
						$scope.state = $state.current;
						$scope.estado = $state.get();
						// $scope.eventsService= eventsService;
						$scope.showGridBottomSheet = function($event) {
							$mdBottomSheet.show({
								// template: fs.readFileSync(__dirname + '/templates/TrainingGridBottomSheet.html'),
								template: '<md-bottom-sheet class="md-grid"><md-list><md-list-item><md-button><ng-md-icon icon="launch" style="fill:gray" size="32"><div> Visualizar </div> </ng-md-icon> </md-button></md-list-item></md-list></md-bottom-sheet>',
								// template: '<md-bottom-sheet class="md-grid"> <md-list> <md-list-item ng-repeat="item in items"> <md-button class="md-grid-item-content" ng-click="listItemClick($index)"> <ng-md-icon icon="launch" style="fill:gray" size="22"></md-icon> <div class="md-grid-text">{{item.name}}</div></md-button> </md-list-item> </md-list></md-bottom-sheet>',
								controller: 'TrainingGridBottomSheetCtrl',
								parent: angular.element(document.getElementById('training')),
								targetEvent: $event
							}).then(function(clickedItem) {
								// alert(clickedItem.name + ' clicked!');
								console.log("teste");
							});
						};
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
						$scope.readonly = true;
						$scope.readonly2 = true;
						$scope.fruitNames2 = ['Bíceps Barra', 'Rosca Alternada', 'Rosca Investida','Rosca V', 'Rosca Alteres'];
						$scope.fruitNames= [
							  {
								'name' : 'Bíceps Barra',
								'type' : 'Brassica'
							  },
							  {
								'name' : 'Bíceps V',
								'type' : 'Brassica'
							  },
							  {
								'name' : 'Bíceps Alternado',
								'type' : 'Umbelliferous'
							  }
							]; 
						$scope.newVeg = function(chip) {
							return {
								name: chip,
								type: 'unknown'
							};
						};
						// $scope.eventsService= eventsService;
					},
					template: fs.readFileSync(__dirname + '/templates/addtrainingWrap.html')
				}
			}
		}
	}
};
