var fs = require('fs');
module.exports = {
	user : {
		user : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Painel Inicial'
			},
			views: {
				controller: function($stateParams) {
					// expect($stateParams).toBe({userId: 12});
				},
				'content@core': {
					template: fs.readFileSync(__dirname + '/templates/userContent.html')  
				}
			},
		},
		schedule : {
			authenticate: true,
			ncyBreadcrumb: {
				label: 'Agenda'
			},
			views: {
				'content@core': {
					controller:'scheduleController',
					template: fs.readFileSync(__dirname + '/templates/scheduleUserContent.html')  
				}
			},
		}
	}
};
