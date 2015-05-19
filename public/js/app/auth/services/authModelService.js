module.exports = function ($state,$cookies, RestangularCustom) {
	var authModel = {
		currentUser: {},
		authenticated: false,
		token: '',
		username: '',
		password: ''
	};

	authModel.isAuthenticated = function () {
		if ($cookies.authenticated) return $cookies.authenticated;
		return authModel.authenticated;
	};

	authModel.authenticate = function(token){
		RestangularCustom.setDefaultHeaders({'Authorization': authModel.token});
		authModel.token = token;
		authModel.authenticated = true;
	};

	authModel.init_token = function(){
		var token = $cookies.token;
		if (token){
			authModel.authenticate(token);
		}
	};


	authModel.login = function () {
		RestangularCustom.all('login').post({username:authModel.username, password:authModel.password}).then(function(response){
			authModel.authenticate(response.headers('Authorization'));
			console.log(authModel.token);
			$state.go('core.user', {userId: 12});
			$cookies.authenticated = true;
		},function(){
			console.log("Erro no Login (authModelService)");
		});
	};

	authModel.logout = function () {
		authModel.authenticated = false;
		$cookies.authenticated = "";
		$state.go('login');
	};

	return authModel;
};
