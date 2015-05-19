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
						eventsService: function(eventsService){
							return eventsService;
						}
					},
					controller: function($scope, eventsService) {
						$scope.eventsService= eventsService;
					},
					template: fs.readFileSync(__dirname + '/templates/content-main.html')  
				},
				'aside@core': {
					resolve: {
						eventsService: function(eventsService){
							return eventsService;
						}
					},
					controller: function($scope, eventsService, RestangularCustom) {
						var gm = $scope.eventsService= eventsService;
						$scope.user = RestangularCustom.all('usuario').getList().$object;
					},
					template: fs.readFileSync(__dirname + '/templates/aside.html')
				},
				'header@core': {
					resolve: {
						eventsService: function(eventsService){
							return eventsService;
						}
					},
					controller: 'headerController',
					template: fs.readFileSync(__dirname + '/templates/header.html')
				}
			}
		}
	}
};


