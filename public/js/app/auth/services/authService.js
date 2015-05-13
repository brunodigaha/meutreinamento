module.exports = function ($state,$cookies, Restangular) {
	var authModel = {
		identity: undefined,
		authenticated: false
	};

	authModel.isAuthenticated = function () {
		if ($cookies.authenticated) return $cookies.authenticated;
		return authModel.authenticated;
	};

	authModel.authenticate = function () {
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
