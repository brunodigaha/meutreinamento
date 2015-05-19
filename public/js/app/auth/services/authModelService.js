module.exports = function ($state,$cookies, RestangularCustom) {
	var authModel = {
		currentUser: {},
		authenticated: false,
		username: '',
		password: ''
	};

	authModel.isAuthenticated = function () {
		if ($cookies.authenticated) return $cookies.authenticated;
		return authModel.authenticated;
	};

	authModel.set_token = function(){
		RestangularCustom.setDefaultHeaders({'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImJydW5vIGFsZXhhbmRyZSBkZSBzb3V6YSIsImlhdCI6MTQ      zMTk3MDE4MH0.n3nlOjj_IlNnGbnYkCUZFQN59Hlt8KARqcoJaNUZ8tE'});
	};

	authModel.login = function () {
		authModel.authenticated = true;
		$state.go('core.user', {userId: 12});
		$cookies.authenticated = true;
	};

	authModel.logout = function () {
		authModel.authenticated = false;
		$cookies.authenticated = "";
		$state.go('login');
	};

	return authModel;
};
