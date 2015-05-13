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
	require('./auth').name,
	require('./core').name,
	require('./user').name,
	require('./train').name
])
.config(require('./appRoutes.js'))
.run(require('./appRun.js'));


