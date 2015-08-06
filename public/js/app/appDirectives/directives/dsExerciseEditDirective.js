var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExerciseEditTemplateDirective.html'),
		// transclude:true,
		scope: {
			exercise: "=",
			plans:"="
		},
		controller: function($scope,$element,$attrs){
			// console.log($scope.exercicios);
			// this = $scope;
			$scope.exerciseEdit = {
				edit : false
			};


			var series = [];
			this.registerSerie = function(serie){
				series.push(serie);
			};
			this.close_all = function (){
				series.forEach(function(serie){
					serie.isOpened = false;
				});
			};


			$scope.edit_serie = function() {
				$scope.exerciseEdit.edit = true;
			};


			$scope.tabOpened=false;
			$scope.open_tab = function() {
				$scope.tabOpened = true;
			};
			$scope.close_tab = function() {
				$scope.tabOpened = false;
			};
			$scope.toggle_tab = function() {
				$scope.tabOpened = !$scope.tabOpened;
			};

			$scope.pesquisar = '';
			$scope.pesquisar_exercicio = function(event) {
				if ($scope.pesquisar.lenght !== 0){
					$scope.tabOpened = true;
				} 
			};


			$scope.repeticao= 3;
			$scope.peso=80;


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
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
						{
							nome:"Leg Press",
							select: false
						},
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

		}
		// require: "^dsExercises",
		// link :function(scope, element,attrs,ctrl) {
		// 	ctrl.registerExercise(scope);
		// 	scope.open_exerc= function () {
		// 		ctrl.close_all();
		// 		scope.isOpened = true;
		// 	};
		// 	scope.remove = function(exercicio){
		// 		scope.$emit('remove_exercise',exercicio);
		// 	};
		// 	scope.close_exerc= function () {
		// 		scope.isOpened = false;
		// 	};
		// }
	};
};
