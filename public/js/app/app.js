require('angular');
require('modernizr');
angular.module('app',[
	require('ui-router').name
])

.controller('MyCtrol',['$scope', function($scope){
	$scope.mensagem = "aluno";
}]);


