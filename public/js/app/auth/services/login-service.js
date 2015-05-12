module.exports = function () {
	var loginModel = {
		identity: undefined,
		authenticated: 'false'
	};

	loginModel.isAuthenticated = function () {
		return authenticated;
	};

	loginModel.authenticate = function () {
		loginModel.authenticated = true;
	};

	return loginModel;
};
