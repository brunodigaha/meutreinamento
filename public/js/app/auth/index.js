module.exports = angular.module('auth',[])
			.factory('authModelService', require('./services/authModelService.js'))
			.controller('loginController', require('./controllers/loginController.js'));
