module.exports = angular.module('core',[])
		.controller('headerController', require('./controllers/headerController.js'))
		.factory('eventsService', require('./services/eventsService.js'))
		.factory('RestangularCustom', require('./services/restangularCustom.js'));
