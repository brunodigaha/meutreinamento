/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings');

// Create a server with a host, port, and options
var server = Hapi.createServer('0.0.0.0', config.port);

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

// You can also connect/disconnect with the database
server.plugins['hapi-goose'].connect(function (err){
	if (err) {
		console.log(err);
	}									
});
//server.plugins['hapi-goose'].disconnect();


// Add the server routes
server.route(require('./server/config/routes'));

//Start the server
server.start(function() {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});
