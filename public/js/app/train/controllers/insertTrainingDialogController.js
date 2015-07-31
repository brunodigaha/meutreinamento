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
		"Triset"
	];
	$scope.serie= 3;
	$scope.descanso=20;
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

};
