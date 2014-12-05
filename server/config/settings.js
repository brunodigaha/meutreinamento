/**
* Dependencies.
*/
var path = require('path');

// Defaults that you can access when you require this config.
module.exports = {
	productionMode: false,
	mongodb_uri: 'mongodb://localhost/mytodoapp',
    rootPath: path.normalize(__dirname + '/../..'),
    port: parseInt(process.env.PORT, 10) || 3000
};
