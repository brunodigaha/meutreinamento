var fs = require('fs');
module.exports = {
	user : {
		user : {
			authenticate: true,
			views: {
				'content@core': {
					template: fs.readFileSync(__dirname + '/templates/content.html')  
				}
			}
		}
	}
};
