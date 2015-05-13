//other dependencies
require('holderjs');
require('modernizr');

require('angular');
//angular modules
angular
.module('app',[
	require('ui-router').name,
	require('restAngular').name,
	require('angularCookies').name,
	require('./auth/index.js').name
])
.factory('userModel', require('./userModel.js'))
.factory('RestangularCustom', require('./restangularCustom.js'))
.config(require('./appRoutes.js'))
.run(require('./appRun.js'));


