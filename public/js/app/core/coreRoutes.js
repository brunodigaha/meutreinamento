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
					controller: function($scope, coreEventsService, RestangularCustom, $mdDialog) {
						var coreEvents = $scope.coreEvents = coreEventsService;
						// $scope.user = RestangularCustom.all('usuario').getList().$object;
					 $scope.doSecondaryAction = function(event) {
						 var confirm = $mdDialog.confirm()
						 .title('Você realmente deseja fechar este usuário?')
						 .content('O usuário será fechado, para acesso a ele novamente é necessário reabrí-lo.')
						 .ariaLabel('Lucky day')
						 .ok('Fechar!')
						 .cancel('Cancelar')
						 .targetEvent(event);
						 $mdDialog.show(confirm).then(function() {
							 alert('O usuário foi fechado!');
						 }, function() {
							 // alert('Foi cancelado');
						 });
					 };	
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


