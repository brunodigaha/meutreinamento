var fs = require('fs');
module.exports = {

	login : {
		name: 'home',
		url: '/login',
		views: {
			'master': {
				// controller: 'vimAController',
				template: fs.readFileSync(__dirname + '/templates/login.html')  
			},
		}
	}

};


