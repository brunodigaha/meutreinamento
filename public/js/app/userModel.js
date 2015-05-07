module.exports = function () {
	var userModel = {
		nome: '',
		url: ''
	};

	userModel.add_nome = function (nomeuser) {
		userModel.nome = nomeuser;
	};

	return userModel;
};
