var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExerciseTemplateDirective.html'),
		// transclude:true
		scope: {
			exercicio: "="
		}

	};
};
