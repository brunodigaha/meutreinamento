var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/perfil');
	$locationProvider.html5Mode(false);
	$stateProvider
		.state('home', {
			url:'/perfil',
			views: {
				'alunos': {
					// controller: 'vimAController',
					template: fs.readFileSync(__dirname + '/perfil/templates/alunos.html')
				},
				'perfil': {
					template: fs.readFileSync(__dirname + '/perfil/templates/perfil.html')
				},
				'conteudo': {
					template: fs.readFileSync(__dirname + '/perfil/templates/conteudo.html')  
				}
			}
		});
};
