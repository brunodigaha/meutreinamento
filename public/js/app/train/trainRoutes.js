var fs = require('fs');
module.exports = {
	train : {
		train : {
			authenticate: true,
			views: {
				'content@core': {
					resolve: {
						eventsService: function(eventsService){
							return eventsService;
						}
					},
					controller: function($scope, eventsService,$state,$stateParams) {
						$scope.params = $stateParams;
						$scope.state = $state.current;
						$scope.eventsService= eventsService;
					},
					template: "treinos do alunos {{params}} {{state}}"	
				},
			}
		}
	}
};
