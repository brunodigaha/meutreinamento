require('angular');
require('ui-router');

var app = angular.module('app',['ui.router']);

app.controller('MyCtrol',['$scope', function($scope){
	$scope.mensagem = "aluno";
}]);


