var fs = require('fs');
module.exports = {
	user : {
		user : {
			authenticate: true,
			views: {
				controller: function($stateParams) {
					// expect($stateParams).toBe({userId: 12});
				},
				'content@core': {
					template: fs.readFileSync(__dirname + '/templates/content.html')  
				}
			}
		}
	}
};
