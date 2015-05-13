var fs = require('fs');
module.exports = {
	user : {
		user : {
			authenticate: true,
			views: {
				'content@core': {
					template: fs.readFileSync(__dirname + '/templates/content.html')  
				},
				'menu@core': {
					resolve: {
						userModel: function(userModel){
							return userModel;
						}
					},
					controller: function($scope, userModel) {
						$scope.userModel= userModel;
					},
					template: fs.readFileSync(__dirname + '/templates/teste.html')
				}
			}

		}
	}
};
