/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings');

// Create a new server
var server = new Hapi.Server();

// Setup the server with a host and port
server.connection({host: config.host, port: config.port});

// Setup the views engine and folder
server.views({
    engines: {
        html: require('swig')
    },
    path: './server/views'
});

// Export the server to be required elsewhere.
module.exports = server;

// Bootstrap Hapi Server Plugins
require('./server/config/plugins');

// Database server init
// require('./server/config/database');

// Setup  method the authentication
var validate = function (username, token, callback) {
	Models = require('./server/models/users');
	Models.Usuarios.findOne({"credencial.token": token },function(err, user) {
		if (user === null) {
			isValid = false;
			permissao = null;
		}
		else {
			isValid = true;
			permissao = user.permissao;
		}
		callback(err, isValid, {usuario: user, role:permissao});
	});
};
server.auth.strategy('simple', 'basic', { validateFunc: validate, allowEmptyUsername: true });

server.route(require('./server/config/routes'));

//Start the server
server.start(function() {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});
