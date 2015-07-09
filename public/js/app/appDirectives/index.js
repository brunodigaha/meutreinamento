module.exports = angular.module('appDirectives',[])
		.directive('dsTraining', require('./directives/dsTrainingDirective.js'))
		.directive('dsInfo', require('./directives/dsInfoDirective.js'));
