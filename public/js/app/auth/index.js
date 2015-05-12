module.exports = angular.module('auth',[])
			.factory('auth', require('./services/login-service.js'));
