var Mongoose = require('mongoose'),
	Config = require('./settings');

mongo_uri = (Config.productionMode === true) ? Config.mongodb_uri.prod : Config.mongodb_uri.dev;	
Mongoose.connect(mongo_uri);
// Mongoose.set('debug', true);
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;
