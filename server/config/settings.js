/**
* Dependencies.
*/
var path = require('path');

var mongo = {
        username: '<dbusername>',
        password: '<dbpassword>',
        url: '<dbstring>.mongolab.com:<port>',
        database: 'authdb'
};

// Defaults that you can access when you require this config.
module.exports = {
	productionMode: false,
	mongodb_uri: {
		prod: 'mongodb://' + mongo.username + ':' + mongo.password + '@' + mongo.url + '/' + mongo.database,
		dev: 'mongodb://localhost/mytodoapp'
	},
    rootPath: path.normalize(__dirname + '/../..'),
    port: parseInt(process.env.PORT, 10) || 3000,
    host: '0.0.0.0'
};
