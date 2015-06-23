var fs = require('fs');
module.exports = function($scope, coreEventsService,$state,$stateParams,$mdDialog) {
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
	$scope.teste= function(){
		alert("bruno");
	};
	$scope.importTraining = function(ev) {
		$mdDialog.show({
			controller: 'ImportDialogController',
			// templateUrl: 'dialog1.tmpl.html',
			template: fs.readFileSync(__dirname + '/../templates/ImportDialogTemplate.html'),
			parent: angular.element(document.body),
			targetEvent: ev,
		})
		.then(function(answer) {
			$scope.alert = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.alert = 'You cancelled the dialog.';
		});
	};

};
