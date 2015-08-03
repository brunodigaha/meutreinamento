var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExerciseTemplateDirective.html'),
		transclude:true,
		scope: {
			exercicio: "="
		},
		require: "^dsExercises",
		link :function(scope, element,attrs,ctrl) {
			ctrl.registerExercise(scope);
			scope.open_exerc= function () {
				ctrl.close_all();
				scope.isOpened = true;
			};
			scope.close_exerc= function () {
				scope.isOpened = false;
			};
		}
	};
};
