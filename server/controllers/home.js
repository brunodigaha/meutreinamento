var Models = require('../models/users');
var joi = require('joi');
var bcrypt = require('bcrypt');
var randToken = require('rand-token');

exports.home = {
	handler: function (request, reply){
		reply({success: true, result: request.auth.credentials}).code(200);
	},
	auth: 'simple',
	plugins: {
		'hapiAuthorization': {roles:['aluno','professor']}
	}
};

exports.login = {
	handler: function (request, reply){
		Models.Usuarios.findOne({"credencial.username": request.payload.username},function(err, usuario) {
			if (err) {
				reply({success:false, message: err.message}).code(404);	
			}
			else if (!usuario || usuario===null) {
				reply({success:false, message: 'Usuário ou senha incorretos'}).code(404);					
			}
			else {
				bcrypt.compare(request.payload.password, usuario.credencial.password, function (err,isValid){
					if (err) {
						reply({success:false, message: err.message}).code(400);							
					}							
					else if (isValid) {
						var token = randToken.generate(16,"abcdefghijklnmopqrstuvwxyz1234567890")+String(usuario._id);
						token = token.split('').sort(function(){return 0.5-Math.random();}).join('');
						usuario.credencial.token = token;
						usuario.save(function (err, saved) {
							if (err){
								reply({success: false, message: err.message}).code(500);
							}else {
								reply({success: true, result: {token: usuario.credencial.token}}).code(200);
							}
						});
					}
					else {
						reply({success:false, message: 'Usuário ou senha incorretos'}).code(404);					
					}
				});
			}	
		});
	},
	validate: {
		payload : {
			username: joi.string().required(),
			password: joi.string().required()
		}
	},
	app:{
		name: "login"
	}
};
