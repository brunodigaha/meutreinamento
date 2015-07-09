var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsInfoTemplateDirective.html'),
		transclude:true
		// scope: {
		// 	title: "@",
		// 	content: "@"
		// }

	};
};
