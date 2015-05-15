// Load the server
var settings = require('./settings'),
    server = require(settings.rootPath + '/server');

// Options to pass into the 'Good' register
var goodOptions = {
    opsInterval: 50000,
    reporters: [{
        reporter: require('good-console'),
        args:[{ ops: '*', request: '*', log: '*', response: '*', 'error': '*' }]
    }]
};

// The Assets Configuaration Options
var assetOptions = require(settings.rootPath + '/assets');

//The Authorization Config Options
var authorizationOptions = {
	roles: ['administrador','professor'],
	hierarchy: false
};

server.register([
    {
        register: require("good"),
        options: goodOptions
    },
	{
        register: require("hapi-auth-jwt2"),
    },
    {
        register: require("hapi-authorization"),
        options: authorizationOptions
    },
    {
        register: require("hapi-assets"),
        options: assetOptions
    },
    {
        register: require("hapi-named-routes")
    },
    {
        register: require("hapi-cache-buster")
    }
], function (err) {
    if (err) {
        console.error('Failed to load a plugin:', err);
        throw err;
    }
});