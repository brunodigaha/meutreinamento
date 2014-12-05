/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
var controller = requireDirectory(module, '../controllers');

var api = {
	v1: "/api/v1"
};

module.exports = [
	// Web Service API
    {        method: 'GET',        path: api.v1+'/usuario',                  config : controller.home.home    },
    {        method: 'POST',       path: api.v1+'/login',                    config : controller.home.login    },

	// Page Home
    {        method: 'GET',        path: '/home',                     config : controller.base.about    },
    {        method: 'GET',        path: '/',                         config : controller.base.index    },
    {        method: 'GET',        path: '/{path*}',                  config : controller.base.missing    },

	// Server static files
    {        method: 'GET',        path: '/partials/{path*}',         config : controller.assets.partials    },
    {        method: 'GET',        path: '/images/{path*}',           config : controller.assets.images    },
    {        method: 'GET',        path: '/css/{path*}',              config : controller.assets.css    },
    {        method: 'GET',        path: '/js/{path*}',               config : controller.assets.js    },
    {        method: 'GET',        path: '/bower_components/{path*}', config : controller.assets.bower    }

];
