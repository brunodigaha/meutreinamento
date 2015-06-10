var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider, $mdThemingProvider) {
	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise('/user/12');
	// $urlRouterProvider.when('/home', '/home/index');
	$stateProvider

		.state('core',require('./core/coreRoutes.js').core.core) 

		.state('core.user',angular.extend(
				{url:'/user/{userId:int}'},require('./user/userRoutes.js').user.user))

		.state('core.user.treinos',angular.extend(
				{url:'/treinos'},require('./train/trainRoutes.js').train.train))

		.state('login',angular.extend(
				{url:'/login'},require('./auth/authRoutes.js').auth.login));

   $mdThemingProvider.theme('default')
    .primaryPalette('blue');
   //  .accentPalette('orange')
   //  .warnPalette('red')
    // .backgroundPalette('blue');

};
