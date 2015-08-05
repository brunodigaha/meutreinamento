module.exports = angular.module('appDirectives',[])
		.directive('dsTraining', require('./directives/dsTrainingDirective.js'))
		.directive('dsExercises', require('./directives/dsExercisesDirective.js'))
		.directive('dsExercise', require('./directives/dsExerciseDirective.js'))
		.directive('dsExerciseEdit', require('./directives/dsExerciseEditDirective.js'))
		.directive('dsSerie', require('./directives/dsSerieDirective.js'))
		.directive('dsSerieEdit', require('./directives/dsSerieEditDirective.js'))
		.directive('dsPlan', require('./directives/dsPlanDirective.js'))
		.directive('dsInfo', require('./directives/dsInfoDirective.js'));
