module.exports = function ($scope,$timeout, authModelService,$firebaseArray) {
	var userModel = $scope.userModel = authModelService;
	// var URL = new Firebase("https://vitta.firebaseio.com/");
	// $scope.users  = $firebaseArray(URL);
	// $scope.addUser = function(){
	// 	$scope.users.$add({
	// 		nome: $scope.newUserName
	// 	});
	// };
	// $scope.removeUser = function(user){
	// 	$scope.users.$remove(user);
	// };
	// syncObject.$bindTo($scope,"data");
	// $scope.data = $firebaseObject(URL);
	// $scope.items=$firebase(newFirebase(URL+'/items'));
	// $scope.data.$add({nome:"Bruno Alexandre"});
	$scope.login = function () {
		if (userModel.username && userModel.password){
			userModel.loading = true;
			console.log(userModel.username, userModel.password);
			$timeout(authModelService.login,1000);
		}
	};
};
