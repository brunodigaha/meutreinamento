module.exports = function($scope,$timeout,$q,$log, coreEventsService,$state,$stateParams,$mdDialog,$mdBottomSheet) {
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


};
