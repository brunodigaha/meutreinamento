var fs = require('fs');
module.exports = {

	login : {
		name: 'login',
		url: '/login',
		views: {
			'master': {
				controller: 'loginController',
				template: fs.readFileSync(__dirname + '/templates/login.html')  
			},
		}
	}

};


