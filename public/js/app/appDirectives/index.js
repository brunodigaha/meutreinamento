module.exports = angular.module('appDirectives',[])
		.directive('dsTraining', require('./directives/dsTrainingDirective.js'))
		.directive('dsExercise', require('./directives/dsExerciseDirective.js'))
		.directive('dsPlan', require('./directives/dsPlanDirective.js'))
		.directive('dsInfo', require('./directives/dsInfoDirective.js'));
