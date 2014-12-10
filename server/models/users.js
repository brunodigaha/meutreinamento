var server = require('../../server');
var Mongoose = require('../config/database').Mongoose;

exports.Usuarios = Mongoose.model('Usuario', {
	nome : { type : String, required : true, index      : true  },
	imagem : { type : String },
	email : { type : String },
	celular : { type : String },
	dataNascimento : { type : Date },
	dataCriacao : { type : Date, default    : Date.now, select : false },
	credencial :   {
		username: { type : String, unique: true},
		password:{ type: String},
		token: { type: String}
	},
	permissao: {
		type: [String]
	}
});


