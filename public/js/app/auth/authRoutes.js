var fs = require('fs');
module.exports = {
	auth : {
		login : {
			authenticate: false,
			views: {
				'master': {
					resolve: {
						init: function(authModelService, $state,$stateParams){
							// console.log("token",authModelService.token,"authenticated", authModelService.authenticated,$state.current );
							// console.log("esatteParamssssss",$stateParams);
							return {};
						}
					},
					controller: 'loginController',
					template: fs.readFileSync(__dirname + '/templates/login.html')  
				},
			}
		}
	}
};


