var fs = require('fs');
module.exports = function($scope,$timeout,$q,$log, coreEventsService,$state,$stateParams,$mdDialog) {
	var self = $scope;
	self.simulateQuery = false;
	self.isDisabled    = false;
	self.repos         = loadAll();
	self.querySearch   = querySearch;
	self.selectedItemChange = selectedItemChange;
	self.searchTextChange   = searchTextChange;
	/**
	 * Search for repos... use $timeout to simulate
	 * remote dataservice call.
	 */
	function querySearch (query) {
		var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
			deferred;
		if (self.simulateQuery) {
			deferred = $q.defer();
			$timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
			return deferred.promise;
		} else {
			return results;
		}
	}

	function searchTextChange(text) {
		$log.info('Text changed to ' + text);
	}

	function selectedItemChange(item) {
		$log.info('Item changed to ' + JSON.stringify(item));
	}

	/**
	 * Build `components` list of key/value pairs
	 */
	function loadAll() {
		var repos = [
		{
			'name'      : 'Supino Reto'
		},
		{
			'name'      : 'Supino Inclinado'
		},
		{
			'name'      : 'Crucifixo'
		},
		{
			'name'      : 'Flay'
		},
		{
			'name'      : 'Biceps Testa',
			'url'       : 'https://github.com/angular/material-start',
			'watchers'  : '81',
			'forks'     : '303',
		}
		];
		return repos.map( function (repo) {
				repo.value = repo.name.toLowerCase();
				return repo;
				});
	}
	/**
	 * Create filter function for a query string
	 */
	function createFilterFor(query) {
		var lowercaseQuery = angular.lowercase(query);

	return function filterFn(item) {
		return (item.value.indexOf(lowercaseQuery) === 0);
	};

	}
	$scope.list_exercicios = [
		{
			grupo: "Bíceps",
			exercicios: [
				{
					nome:"Biceps Testa",
					select: false
				},
				{
					nome:"Bíceps Barra",
					select: false
				},
				{
					nome:"Bíceps Alternada",
					select: false
			
				},
				{
					nome:"Bíceps Martelo",
					select: false
				}
			]
		},
		{
			grupo: "Tríceps",
			exercicios: [
				{
					nome:"Tríceps Testa",
					select: false
				},
				{
					nome:"Tríceps Supinado",
					select: false
				},
				{
					nome:"Tríceps Corda",
					select: false
				}
			]
		},
		{
			grupo: "Ombro",
			exercicios: [
				{
					nome:"Ombro Frontal",
					select: false
				},
				{
					nome:"Ombro Lateral",
					select: false
				},
				{
					nome:"Ombro Máquina",
					select: false
				}
			]
		},
		{
			grupo: "Costas",
			exercicios: [
				{
					nome:"Polia Frontal",
					select: false
				},
				{
					nome:"Remada Alta",
					select: false
				},
				{
					nome:"Puxada Unilateral",
					select: false
				}
			]
		},
		{
			grupo: "Peito",
			exercicios: [
				{
					nome:"Supino Reto",
					select: false
				},
				{
					nome:"Supino Inclinado",
					select: false
				},
				{
					nome:"Crucifixo",
					select: false
				}
			]
		},
		{
			grupo: "Perna",
			exercicios: [
				{
					nome:"Leg Press",
					select: false
				},
				{
					nome:"Agachamento",
					select: false
				},
				{
					nome:"Adução",
					select: false
				},
				{
					nome:"Abdução",
					select: false
				},
				{
					nome:"Extenção",
					select: false
				},
				{
					nome:"Flexão",
					select: false
				}
			]
		},
		{
			grupo: "Abdominal",
			exercicios: [
				{
					nome:"Prancha",
					select: false
				}
			]
		}
	];

	$scope.exercicios= [
		{
			ordem:1,
			nome:'Supino Reto',
			serie: 3,
			repeticao: 12
		},
		{
			ordem:2,
			nome:'Supino Inclinado',
			serie: 3,
			repeticao: 10
		}
	];

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
	$scope.insert = function(index,grupo){
		$scope.glued = true;
		item=grupo.exercicios[index];
		$scope.exercicios.push(
			{
			nome:item.nome,
			serie: 3,
			repeticao: 12
			}
		);
	};
	$scope.position = {
		x: -500,
		y: -500
	};
	$scope.exercicio_select = {
		ordem:6,
		nome:'Supino Máquina',
		serie: 0,
		repeticao: 0
	};
	$scope.alt='repeticao';
	$scope.glued = true;
	$scope.index = null;
	$scope.close_all = false;
	$scope.plus_weight = function(){
		if ($scope.alt=='serie'){
			$scope.exercicios[$scope.index].serie= $scope.exercicios[$scope.index].serie+1;
		}else if ($scope.alt == 'repeticao'){
			$scope.exercicios[$scope.index].repeticao= $scope.exercicios[$scope.index].repeticao+1;
			// console.log($scope.exercicios[index]);
		}
		$scope.exercicio_select = $scope.exercicios[$scope.index];
	};
	$scope.minus_weight = function(){
		if ($scope.alt=='serie'){
			$scope.exercicios[$scope.index].serie= $scope.exercicios[$scope.index].serie-1;
		}else if ($scope.alt == 'repeticao'){
			$scope.exercicios[$scope.index].repeticao= $scope.exercicios[$scope.index].repeticao-1;
			// console.log($scope.exercicios[index]);
		}
		$scope.exercicio_select = $scope.exercicios[$scope.index];
	};
	$scope.toggle_volume = function(){
		if ($scope.alt == 'serie'){
			$scope.alt= 'repeticao';
		}else{
			$scope.alt='serie';
		}
	};
	$scope.close = function (){
		$scope.close_all = false;
		$scope.position.x=-500;
		$scope.position.y=-500;
		$scope.index = null;
	};
	$scope.remove = function(index){
		$scope.exercicios.splice(index,1);
	};

	$scope.weight_add = function(ev,exercicio,index) {
		$scope.index = index;
		$scope.close_all = true;
		$scope.position.x=ev.pageX;
		$scope.position.y=ev.pageY;
		$scope.alt='repeticao';
		$scope.exercicio_select = $scope.exercicios[index];
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
