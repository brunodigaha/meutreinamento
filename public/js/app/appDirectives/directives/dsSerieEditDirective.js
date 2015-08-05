var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsSerieEditTemplateDirective.html'),
		// transclude:true,
		// scope: {
		// 	serie: "=",
		// 	position: "@"
		// },
		controller: function($scope,$element,$attrs){
			// this.edit_serie = function(serie){
			// 	console.log("edit serie em editar serie diretiva");
			// };
		}
		// require: "^dsExerciseEdit",
		// link :function(scope, element,attrs,ctrl) {
		// 	ctrl.registerSerie(scope);
		// 	scope.isOpened= false;
		// 	scope.open_serie= function () {
		// 		ctrl.close_all();
		// 		scope.isOpened = true;
		// 	};
		// 	scope.close_serie= function () {
		// 		scope.isOpened = false;
		// 	};
		// }
	};
};
