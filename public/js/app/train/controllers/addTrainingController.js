module.exports = function($scope, coreEventsService,$state,$stateParams) {
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

};
