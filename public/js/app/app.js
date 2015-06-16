//other dependencies
require('modernizr');
require('angular');
//angular modules
angular
.module('app',[
	require('ui-router').name,
	require('angularBreadcrumb').name,
	require('restAngular').name,
	require('angularCookies').name,
	require('angularMessages').name,
	require('angularIcons').name,
	require('angularMaterial').name,
	require('angularFire').name,
	require('angularHolderjs').name,
	require('angularUploadcare').name,
	require('./auth').name,
	require('./core').name,
	require('./user').name,
	require('./train').name
])
.config(require('./appRoutes.js'))
.run(require('./appRun.js'));


