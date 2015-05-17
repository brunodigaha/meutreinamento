module.exports = function ($scope, authService,$firebaseArray) {
	var URL = new Firebase("https://vitta.firebaseio.com/");
	$scope.users  = $firebaseArray(URL);
	$scope.addUser = function(){
		$scope.users.$add({
			nome: $scope.newUserName
		});
	};
	$scope.removeUser = function(user){
		$scope.users.$remove(user);
	};
	// syncObject.$bindTo($scope,"data");
	// $scope.data = $firebaseObject(URL);
	// $scope.items=$firebase(newFirebase(URL+'/items'));
	// $scope.data.$add({nome:"Bruno Alexandre"});
	$scope.login = function () {
		authService.authenticate();
	};
	$scope.form = {
		login: '',
		senha: ''
	};
};
