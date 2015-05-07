var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$locationProvider.html5Mode(false);
	$stateProvider
		.state('main', {
			abstract: true,
			views: {
				'master': {
					template: fs.readFileSync(__dirname + '/perfil/templates/master.html')  
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
			url: '/home',
			views: {
				'aside': {
					// controller: 'vimAController',
					template: fs.readFileSync(__dirname + '/perfil/templates/alunos.html')
				},
				'header': {
					template: fs.readFileSync(__dirname + '/perfil/templates/perfil.html')
				},
				'content': {
					template: fs.readFileSync(__dirname + '/perfil/templates/conteudo.html')  
				}
			}
		});
};
