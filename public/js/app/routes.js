var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/user/12');
	$locationProvider.html5Mode(false);
	$stateProvider
		.state('main', {
			abstract: true,
			views: {
				'master': {
					template: fs.readFileSync(__dirname + '/perfil/templates/master.html')  
				},
				'aside@main': {
					template: fs.readFileSync(__dirname + '/perfil/templates/aside.html')
				},
				'header@main': {
					resolve: {
						userModel: function(userModel){
							userModel.add_nome('usuario1212');
							return userModel;
						}
					},
					controller: function($scope, userModel) {
						$scope.userModel= userModel;
					},
					template: fs.readFileSync(__dirname + '/perfil/templates/header.html')
				}
			}
		})
		.state('login', {
			url: '/login',
			views: {
				'master': {
					// controller: 'vimAController',
					template: "<h1><a ui-sref='main.home'> Entrar no sistema</a> </h1>"
				},
			}
		})
		.state('main.home', {
			url: '/user/{userId:int}',
			views: {
				'content@main': {
					template: fs.readFileSync(__dirname + '/perfil/templates/content.html')  
				},
				'menu@main': {
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
		});
};
