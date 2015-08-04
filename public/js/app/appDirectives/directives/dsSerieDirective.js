var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsSerieTemplateDirective.html'),
		// transclude:true,
		scope: {
			serie: "=",
			position: "@"
		},
		// require: "^dsExercises",
		// link :function(scope, element,attrs,ctrl) {
		// 	ctrl.registerExercise(scope);
		// 	scope.open_exerc= function () {
		// 		ctrl.close_all();
		// 		scope.isOpened = true;
		// 	};
		// 	scope.remove = function(exercicio){
		// 		scope.$emit('remove_exercise',exercicio);
		// 	};
		// 	scope.close_exerc= function () {
		// 		scope.isOpened = false;
		// 	};
		// }
	};
};
