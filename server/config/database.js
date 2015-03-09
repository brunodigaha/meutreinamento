var Mongoose = require('mongoose'),
    uriUtil = require('mongodb-uri'),
	Config = require('./settings');

var mongodbUri = 'mongodb://admin:123@ds047901.mongolab.com:47901/vittadb';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);


mongo_uri = (Config.productionMode === true) ? Config.mongodb_uri.prod : Config.mongodb_uri.dev;	
Mongoose.connect(mongooseUri);
// Mongoose.set('debug', true);
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;