var fs = require('fs');
module.exports = {
	core : {
		core : {
			abstract: true,
			views: {
				'master': {
					template: fs.readFileSync(__dirname + '/templates/master.html')	
				},
				'content-main@core': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel) {
						$scope.userModel= userModel;
					},
					template: fs.readFileSync(__dirname + '/templates/content-main.html')  
				},
				'aside@core': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel, RestangularCustom) {
						var gm = $scope.userModel= userModel;
						$scope.user = RestangularCustom.all('usuario2').getList().$object;
					},
					template: fs.readFileSync(__dirname + '/templates/aside.html')
				},
				'header@core': {
					resolve: {
						userModel: function(userModel){
							userModel.add_nome('usuario1212');
							return userModel;
						}
					},
					controller: function($scope, userModel, authService) {
						var gm = $scope.userModel= userModel;
						$scope.logout = function () {
							authService.logout();
						};
					},
					template: fs.readFileSync(__dirname + '/templates/header.html')
				}
			}
		}
	}
};


