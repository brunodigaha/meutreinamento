module.exports = function () {
	var userModel = {
		nome: '',
		clickon: false,
		url: ''
	};

	userModel.add_nome = function (nomeuser) {
		userModel.nome = nomeuser;
	};

	userModel.open_alunos = function () {
		userModel.clickon = !userModel.clickon;
	};

	return userModel;
};