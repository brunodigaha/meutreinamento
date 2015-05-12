//other dependencies
require('holderjs');
require('modernizr');

require('angular');

//angular modules
angular
.module('app',[
	require('ui-router').name,
	require('./auth/index.js').name
])
.factory('userModel', require('./userModel.js'))
.config(require('./app-routes.js'))
.run(require('./app-run.js'));


