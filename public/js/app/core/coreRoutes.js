var fs = require('fs');
module.exports = {
	core : {
		core : {
			abstract: true,
			// redirectTo: 'core.user',
			views: {
				'wrap': {
					template: fs.readFileSync(__dirname + '/templates/wrap.html')
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
				'content-search@core': {
					resolve: {
						eventsService: function(eventsService){
							return eventsService;
						}
					},
					controller: function($scope, eventsService) {
						$scope.eventsService= eventsService;
					},
					template: fs.readFileSync(__dirname + '/templates/content-search.html')  
				},
				'aside@core': {
					resolve: {
						eventsService: function(eventsService){
							return eventsService;
						}
					},
					controller: function($scope, eventsService, RestangularCustom) {
						var gm = $scope.eventsService= eventsService;
						// $scope.user = RestangularCustom.all('usuario').getList().$object;
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


