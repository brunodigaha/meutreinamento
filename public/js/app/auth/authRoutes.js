var fs = require('fs');
module.exports = {
	auth : {
		login : {
			views: {
				'master': {
					controller: 'loginController',
					template: fs.readFileSync(__dirname + '/templates/login.html')  
				},
			}
		}
	}
};


