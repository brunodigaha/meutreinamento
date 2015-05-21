module.exports = angular.module('core',[])
		.controller('headerController', require('./controllers/headerController.js'))
		.factory('coreEventsService', require('./services/coreEventsService.js'))
		.factory('RestangularCustom', require('./services/restangularCustom.js'));
