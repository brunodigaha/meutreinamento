module.exports = function ($state,$cookies, RestangularCustom) {
	var authModel = {
		currentUser: {},
		authenticated: false,
		token: '',
		username: '',
		password: ''
	};

	authModel.authenticate = function(token){
		RestangularCustom.setDefaultHeaders({'Authorization': authModel.token});
		authModel.token = token;
		$cookies.token = token;
		authModel.authenticated = true;
	};

	authModel.init_token = function(){
		if(!authModel.authenticated && !!$cookies.token) {
			authModel.authenticate($cookies.token);
		}else if (!$cookies.token){
			authModel.logout();
			// authModel.authenticated = false;
			// authModel.token = '';
			// $cookies.token = '';
			return false;
		}
		return true;
	};


	authModel.login = function () {
		RestangularCustom.all('login').post({username:authModel.username, password:authModel.password}).then(function(response){
			authModel.authenticate(response.headers('Authorization'));
			$state.go('core.user', {userId: 12});
		},function(){
			console.log("Erro no Login (authModelService)");
		});
	};

	authModel.logout = function () {
		authModel.token = "";
		$cookies.token = "";
		authModel.authenticated = false;
		$state.go('login');
		console.log("logout passou");
	};

	return authModel;
};
