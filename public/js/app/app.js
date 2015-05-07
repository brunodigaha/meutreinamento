//other dependencies
require('holderjs');
require('modernizr');

require('angular');

//angular modules

angular
.module('app',[
	require('ui-router').name
])
.factory('userModel', require('./userModel.js'))
.config(require('./routes.js'));


