module.exports = function ($state,$cookies, RestangularCustom) {
	var authModel = {
		currentUser: {},
		token: '',
		username: '',
		password: ''
	};

	authModel.set_login = function(token){
		RestangularCustom.setDefaultHeaders({'Authorization': authModel.token});
		authModel.token = token;
		$cookies.token = token;
	};

	authModel.reset_login = function () {
			RestangularCustom.setDefaultHeaders({"Authorization": ""});
			authModel.token = "";
			$cookies.token = ""; 
	};

	authModel.is_authenticated = function () {
		var cookieToken = $cookies.token;
		if (cookieToken) {
			authModel.set_login(cookieToken);
			return true;
		}
		$cookies.token = '';
		console.log("passou sem token");
		return false;
	};


	// authModel.init_token = function(){
	// 	if(!authModel.set_logind && !!$cookies.token) {
	// 		authModel.set_login($cookies.token);
	// 	}else if (!$cookies.token){
	// 		// authModel.logout();
	// 		// authModel.set_logind = false;
	// 		// authModel.token = '';
	// 		// $cookies.token = '';
	// 		return false;
	// 	}
	// 	return true;
	// };


	authModel.login = function () {
		RestangularCustom.all('login').post({username:authModel.username, password:authModel.password}).then(function(response){
			authModel.set_login(response.headers('Authorization'));
			$state.go('core.user', {userId: 12});
		},function(){
			console.log("Erro no Login (authModelService)");
		});
	};

	authModel.logout = function () {
		authModel.reset_login();
		$state.go('login');
		console.log("logout passou");
	};

	return authModel;
};
