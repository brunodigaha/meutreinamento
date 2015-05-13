var fs = require('fs');
module.exports = {
	train : {
		train : {
			authenticate: true,
			views: {
				'content@core': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel,$state,$stateParams) {
						$scope.params = $stateParams;
						$scope.state = $state.current;
						$scope.userModel= userModel;
					},
					template: "treinos do alunos {{params}} {{state}}"	
				},
			}
		}
	}
};
