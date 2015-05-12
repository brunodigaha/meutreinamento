var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/user/12');
	$locationProvider.html5Mode(false);
	$stateProvider
		.state('base', {
			abstract: true,
			views: {
				'master': {
					template: fs.readFileSync(__dirname + '/perfil/templates/master.html')  
				},
				'content-main@base': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel) {
						$scope.userModel= userModel;
					},
					template: fs.readFileSync(__dirname + '/perfil/templates/content-main.html')  
				},
				'aside@base': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel, Restangular) {
						var gm = $scope.userModel= userModel;
					},
					template: fs.readFileSync(__dirname + '/perfil/templates/aside.html')
				},
				'header@base': {
					resolve: {
						userModel: function(userModel){
							userModel.add_nome('usuario1212');
							return userModel;
						}
					},
					controller: function($scope, userModel, authService) {
						var gm = $scope.userModel= userModel;
						$scope.logout = function () {
							authService.logout();
						};
					},
					template: fs.readFileSync(__dirname + '/perfil/templates/header.html')
				}
			}
		})
		.state('login',require('./auth/authRoutes.js').login)
		.state('base.home', {
			url: '/user/{userId:int}',
			authenticate: true,
			views: {
				'content@base': {
					template: fs.readFileSync(__dirname + '/perfil/templates/content.html')  
				},
				'menu@base': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel) {
						 $scope.userModel= userModel;
					},
					template: fs.readFileSync(__dirname + '/perfil/templates/teste.html')
				}
			}
		})
		.state('base.home.treinos', {
			url: '/treinos',
			authenticate: true,
			views: {
				'content@base': {
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
		});
};
