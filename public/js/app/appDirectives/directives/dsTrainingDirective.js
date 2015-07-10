var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsTrainingTemplateDirective.html'),
		scope: {
			name: "@",
			disable: "@"
		}

	};
};
