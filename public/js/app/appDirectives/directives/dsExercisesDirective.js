var fs = require('fs');
module.exports = function() {
	return{
		template: fs.readFileSync(__dirname + '/../templates/dsExercisesTemplateDirective.html'),
		// transclude:true,
		scope: {
			exercicios: "="
		},
		controller: function($scope,$element,$attrs){
			// console.log($scope.exercicios);
			var exercises = [];
			this.registerExercise = function(exercise){
				exercises.push(exercise);
			};
			this.close_all = function (){
				exercises.forEach(function(exercise){
					exercise.isOpened = false;
				});
			};
		}
	};
};
