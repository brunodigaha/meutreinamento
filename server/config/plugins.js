// Load the server
var settings = require('./settings'),
    server = require(settings.rootPath + '/server');

// Options to pass into the 'Good' plugin
var goodOptions = {
	reporters: [{
		reporter: require('good-console'),
		args:[{ log: '*', request: '*' }]
	}]
};

//Copyright (c) 2014, Tyler Hughes iampbt@gmail.com
//Conect with mongoose database
var gooseOptions = {
	mongodb_uri: settings.mongodb_uri
};

// The Assets Configuaration Options
var assetOptions = require(settings.rootPath + '/assets');

//The Authorization Config Options 
var authorizationOptions = {
	roles: ['administrador','professor'],
	hierarchy: false
};

server.pack.register([
    {
        plugin: require("good"),
        options: goodOptions
    },
	{
        plugin: require("hapi-auth-basic"),
    },
    {
        plugin: require("hapi-authorization"),
        options: authorizationOptions
    },
 	{
        plugin: require("hapi-goose"),
        options: gooseOptions
    },
    {
        plugin: require("hapi-assets"),
        options: assetOptions
    },
    {
        plugin: require("hapi-named-routes")
    },
    {
        plugin: require("hapi-cache-buster")
    }
], function(err) {
    if (err) throw err;
});