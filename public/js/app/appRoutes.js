var fs = require('fs');

module.exports = function ($stateProvider,$locationProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/user/12');
	$locationProvider.html5Mode(false);
	$stateProvider

		.state('core',require('./core/coreRoutes.js').core.core) 

		.state('core.user',angular.extend(
				{url:'/user/{userId:int}'},require('./user/userRoutes.js').user.user))

		.state('core.user.treinos',angular.extend(
				{url:'/treinos'},require('./train/trainRoutes.js').train.train))

		.state('login',angular.extend(
				{url:'/login'},require('./auth/authRoutes.js').auth.login));
};
