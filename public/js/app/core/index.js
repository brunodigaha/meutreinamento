module.exports = angular.module('core',[])
		.factory('userModel', require('./services/userModel.js'))
		.factory('RestangularCustom', require('./services/restangularCustom.js'));
