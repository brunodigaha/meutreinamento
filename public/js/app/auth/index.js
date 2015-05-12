module.exports = angular.module('auth',[])
			.factory('authService', require('./services/authService.js'))
			.controller('loginController', require('./controllers/loginController.js'));
