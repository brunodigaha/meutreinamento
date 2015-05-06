//other dependencies
require('modernizr');
require('holderjs');

require('angular');

//angular modules

angular
.module('app',[
	require('ui-router').name
])
.config(require('./routes.js'));


