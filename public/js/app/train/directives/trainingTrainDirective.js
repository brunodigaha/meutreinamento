var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/trainingTemplateDirective.html'),
		scope: {
			name: "@"
		}

	};
};
