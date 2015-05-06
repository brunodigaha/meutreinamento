var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/perfil');
	$locationProvider.html5Mode(false);
	$stateProvider
		.state('home', {
			url:'/perfil',
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
