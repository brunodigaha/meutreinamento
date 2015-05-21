var fs = require('fs');
module.exports = {
	core : {
		core : {
			abstract: true,
			// redirectTo: 'core.user',
			views: {
				'wrap': {
					template: fs.readFileSync(__dirname + '/templates/coreWrap.html')
				},
				'aside@core': {
					controller: function($scope, coreEventsService, RestangularCustom) {
						var coreEvents = $scope.coreEvents = coreEventsService;
						// $scope.user = RestangularCustom.all('usuario').getList().$object;
					},
					template: fs.readFileSync(__dirname + '/templates/coreAside.html')
				},
				'contentMain@core': {
					controller: function($scope, coreEventsService) {
						var coreEvents = $scope.coreEvents = coreEventsService;
					},
					template: fs.readFileSync(__dirname + '/templates/coreContentMain.html')  
				},
				'header@core': {
					controller: 'headerController',
					template: fs.readFileSync(__dirname + '/templates/coreHeader.html')
				},
				'contentSearch@core': {
					template: fs.readFileSync(__dirname + '/templates/coreContentSearch.html')  
				}
			}
		}
	}
};


