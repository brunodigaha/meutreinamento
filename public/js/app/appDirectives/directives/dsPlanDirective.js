var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsPlanTemplateDIrective.html'),
		transclude:true
		// scope: {
		// 	title: "@",
		// 	content: "@"
		// }

	};
};
