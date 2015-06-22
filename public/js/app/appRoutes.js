var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider,$breadcrumbProvider, $mdThemingProvider) {
	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise('/user/12');
	// $urlRouterProvider.when('/home', '/home/index');
	$stateProvider

		.state('core',require('./core/coreRoutes.js').core.core) 

		.state('core.user',angular.extend(
				{url:'/user/{userId:int}'},require('./user/userRoutes.js').user.user))

		.state('core.user.training',angular.extend(
				{url:'/training'},require('./train/trainRoutes.js').train.training))

		.state('core.user.addtraining',angular.extend(
				{url:'/training/add'},require('./train/trainRoutes.js').train.addtraining))

		.state('login',angular.extend(
				{url:'/login'},require('./auth/authRoutes.js').auth.login));

   $mdThemingProvider.theme('default')
    .primaryPalette('light-blue');
   //  .accentPalette('orange')
   //  .warnPalette('red')
    // .backgroundPalette('blue');
   $mdThemingProvider.theme('grey')
    .primaryPalette('blue-grey');

	// $breadcrumbProvider.setOptions({
	// 	template : '<p> Bruno ng-repeat="step in steps | limitTo:-1"</p> <span> {{ng-bind-html="step.ncyBreadcrumbLabel"}} </span>'
	// });
};
